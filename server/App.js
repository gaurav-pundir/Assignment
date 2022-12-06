const express = require('express')
const app = express()
const oracledb = require('oracledb')
oracledb.outFormat = oracledb.OBJECT
const query = require("./query/query")


const port = 5000

const config = {
      user: 'DQ_USER',
      password: 'DQ_USER',
      connectString: '172.31.43.224:1521/corpusmtd'
}

async function getEmployee() {
      let conn

      try {
            conn = await oracledb.getConnection(config)

            const result = await conn.execute(
                query.dashboard,{p_user_id:user_id}
            )
            const general = {}
            general.name = "General"
            const patient = {}
            patient.name = "Patient"
            const product = {}
            product.name = "Product"
            const event = {}
            event.name = "Event"
            const analysis = {}
            analysis.name = "Analysis"
            const reg_report = {}
            reg_report.name = "Regulatory Reports"
            // const data = {}
            const keys = Object.keys(result.rows)
            for (let key in keys) {
                  const obj = result.rows[key]
                  if(obj.TAB_NAME=="General"){
                        general[obj.SECTION_NAME]=obj.CASES
                  }
                  // data[0] = general
                  if(obj.TAB_NAME=="Patient"){
                        patient[obj.SECTION_NAME]=obj.CASES
                  }
                  // data[1] = patient
                  if(obj.TAB_NAME=="Product"){
                        product[obj.SECTION_NAME]=obj.CASES
                  }
                  // data[2] = product
                  if(obj.TAB_NAME=="Event"){
                        event[obj.SECTION_NAME]=obj.CASES
                  }
                  // data[3] = event
                  if(obj.TAB_NAME=="Analysis"){
                        analysis[obj.SECTION_NAME]=obj.CASES
                  }
                  // data[4] = analysis
                  if(obj.TAB_NAME=="Regulatory Reports"){
                        reg_report[obj.SECTION_NAME]=obj.CASES
                  }
                  // data[5] = reg_report
            }
            const data = [general, patient, product, event, analysis, reg_report]
            return data
            

      } catch (err) {
            console.log('Ouch!', err)
      } finally {
            if (conn) { // conn assignment worked, need to close
                  await conn.close()
            }
      }
}

app.get('/dashboard', (req, res) => {
      getEmployee().then(dbRes => {
            res.send(dbRes)
      }).catch(err => {
            res.send(err)
      })
})

app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
})