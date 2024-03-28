import mssql from 'mssql'
import { sqlConfig } from '../config/sqlConfig.js'

export default class dbHelper{


    static async query (query){
        let pool = mssql.connect(sqlConfig);
        const results = (await pool).request().query(query)

        return results
    }

    static async execute(procedureName, data = {}){
        let pool = mssql.connect(sqlConfig);

        let request = (await (await pool).request())

        for (let key in data) {
            request.input(key, data[key]);
        }

        const result = await request.execute(procedureName)

        return result
    }

}