import { BadRequest } from "@bcwdev/auth0provider/lib/Errors";
import { dbContext } from "../db/DbContext";

class GalaxysService {
    async getGalaxys(){
        let galaxys = await dbContext.Galaxys.find()
        return galaxys
    }

    async getGalaxyById(galaxyId){
        let galaxy = await dbContext.Galaxys.findById(galaxyId)
        if (!galaxy){
            throw new BadRequest('invalid galaxy Id')
        }
        return galaxy
    }

    async createGalaxy(galaxyData){
        let galaxy = await dbContext.Galaxys.create(galaxyData)
        return galaxy
    }

    async deleteGalaxy(galaxyId){
        let galaxy = await this.getGalaxyById(galaxyId)
        await galaxy.remove()
        return galaxy
    }

}

export const galaxysService = new GalaxysService()