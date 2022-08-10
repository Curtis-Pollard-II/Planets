import { galaxysService } from "../services/GalaxysService"
import { starsService } from "../services/StarsService"
import BaseController from "../utils/BaseController"

export class GalaxysController extends BaseController{
    constructor(){
        super('api/galaxys')
        this.router
        .get('', this.getGalaxys)
        .post('', this.createGalaxy)
        .get('/galaxyId', this.getGalaxyById)
        .get('/galaxyId/stars', this.getStarById)
        .delete('/:galaxyId', this.deleteGalaxy)
    }

    async getStarById(req, res, next){
        try {
            let star = await starsService.getStarById(req.params.courseId)
            res.send(star)
        } catch (error) {
            next(error)
        }
    }

    async getGalaxys(req, res, next){
        try {
            let galaxys = await galaxysService.getGalaxys()
            res.send(galaxys)
        } catch (error) {
            next(error)
        }
    }

    async createGalaxy(req, res, next){
        try {
            let galaxyData = req.body
            let galaxy = await galaxysService.createGalaxy(galaxyData)
            res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }

    async getGalaxyById(req, res, next){
        try {
            let galaxy = await galaxysService.getGalaxyById(req.params.carId)
            res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }

    async deleteGalaxy(req, res, next){
        try {
            let galaxy = await galaxysService.deleteGalaxy(req.params.carId)
            res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }
}