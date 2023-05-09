import dal from "../2-utils/dal";
import BookTypeModel from "../4-models/book-type-model";

async function  getAllTypes(): Promise<BookTypeModel[]> {
    const sql = "SELECT * FROM booktype"
    const types = await dal.execute(sql)
    return types    
}

export default {
    getAllTypes
}