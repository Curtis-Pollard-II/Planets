import { starsService } from "../services/StarsService";
import BaseController from "../utils/BaseController";

export class StarsController extends BaseController{
    constructor(){
        super('.api/stars')
        this.router
        .get('', this.getStars)
        .post('', this.createStar)
        .delete('/:starId', this.deleteStar)
    }

    async getStars(req, res, next){
        try {
            let stars = await starsService.getStars()
            res.send(stars)
        } catch (error) {
            next(error)
        }
    }

    async createStar(req, res, next){
        try {
            let starData = req.body
            let star = await starsService.createStar(starData)
            res.send(star)
        } catch (error) {
            next(error)
        }
    }



    async deleteStar(req, res, next){
        try {
            let star = await starsService.deleteStar(req.params.starId)
            res.send(star)
        } catch (error) {
            next(error)
        }
    }






}




