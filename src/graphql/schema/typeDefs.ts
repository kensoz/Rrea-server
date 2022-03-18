import { gql } from 'apollo-server-koa'

// typeDefs
const typeDefs = gql`
  "form"
  type Form {
    value: String
    text: String
  }

  "count"
  type Count {
    area1: Int
    area2: Int
    area3: Int
    area4: Int
    area5: Int
  }

  "user"
  type User {
    id: String
    name: String
    nameSpell: String
    nameCode: String
    job: String
    jobCode: String
    race: String
    raceCode: String
    skill: String
    photo: String
    area: String
    areaCode: String
    YYYYMMDD: String
    HHMMss: String
  }

  "data"
  type Data {
    count: Count
    user: [User]
  }

  "query"
  type Query {
    code: Int
    message: String
    area: [Form]
    name: [Form]
    race: [Form]
    job: [Form]
    data(areaCode: String, jobCode: [String], nameCode: [String], raceCode: [String]): Data
  }
`

export default typeDefs
