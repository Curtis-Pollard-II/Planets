import { BadRequest } from "@bcwdev/auth0provider/lib/Errors";
import { dbContext } from "../db/DbContext";

class StarsService {
    async getStars(){
        let stars = await dbContext.Stars.find()
        return stars
    }

    async getStarById(starId){
        let star = await dbContext.Stars.findById(starId)
        if (!star){
            throw new BadRequest('invalid Star Id')
        }
        return star
    }

    async createStar(starData){
        let star = await dbContext.Stars.create(starData)
        return star
    }

    async deleteStar(starId){
        let star = await this.getStarById(starId)
        await star.remove()
        return star
    }

}

export const starsService = new StarsService()