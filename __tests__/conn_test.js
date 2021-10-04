const {MongoClient} = require("mongodb");
const uri = "mongodb+srv://zunft1:zunft1@zunftapp.fvyph.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const DB = require('../express-server/routes/conn.js')
const mongo = require("mongodb");
const ObjectId = mongo.ObjectID;
describe("person testing", () => {

    beforeAll(async () => {
        await DB.connectToDb()
    })
    afterAll(() => {

    });

    it("gets user if exists", async () => {
        let person = await DB.getUserByEmail("duckin@works")
        let joel = {
            _id: "60a62c7ae4ca3b02adabe26a",
            first_name: "Joel",
            last_name: "Plambeck",
            email: "duckin@works",
            phone: ["0790"],
            picture: "/pretty",
            password: "$2b$12$OSYdBj4hu8D15icsvLhqiOjjlRHkksUiINcEIUs.4fAxQBkPs5h02",
            birthday: "14.9.1998",
            profession: "Master of Disaster",
            settings: {
                wantsNotifications: true,
                autologinEnabled: true
            },
            roles:["Präsident","Chef"],
            authorizations:["canWrite","canRead","canCreateEvents"]
        }
        expect(JSON.stringify(person)).toEqual(JSON.stringify(joel))


    })

    it("gets all users", async () => {
        let people = await DB.getUsers()
        expect(people.length).toEqual(5)

    })

    it("gets user by id", async () => {
        let person = await DB.getUser("60a62d11e4ca3b02adabe26c")
        let joel = {"_id":"60a62d11e4ca3b02adabe26c","first_name":"Erman","last_name":"Longboiiii","email":"it.really@works","picture":"/","password":"$2b$12$s7hzi/jbZTSOEpmsVnjnIuTJSSl436Dw2UAMb0balfqecb7rHjtWK","birthday":"03201.5010","profession":"bibi"}
        expect(JSON.stringify(person)).toEqual(JSON.stringify(joel))

    })

    it("gets all events", async () => {
        let evnts = await DB.getEvents()
        expect(evnts.length).toEqual(1)

    })

    it("creates a user", async () => {
        let user = {first_name:"Scho","last_name":"wieder","email":"zankov@gmail.com","phone":"079 999 99 99","picture":"pretty/picture","password":"123456789","birthday":"04.02.1997","profession":"Chef"}
        await DB.createUser(user)
        let person = await DB.getUser("60afbe2032d73e17b8171654")
        let user2 = {_id:"60afbe2032d73e17b8171654",first_name:"Scho","last_name":"wieder","email":"zankov@gmail.com","phone":"079 999 99 99","picture":"pretty/picture","password":"$2b$12$/mEdX.HrdSO5BQ9P7AJZJeZrRNlHIsAlsJTcaQkcWIcm4XgWm/zLG","birthday":"04.02.1997","profession":"Chef"}
        expect(JSON.stringify(person)).toEqual(JSON.stringify(user2))
    })

    it("deletes a user", async () => {
        let user2 = {_id:"60afbcba6a7ce84708f02934",first_name:"Scho","last_name":"wieder","email":"zankov@gmail.com","phone":"079 999 99 99","picture":"pretty/picture","password":"$2b$12$/mEdX.HrdSO5BQ9P7AJZJeZrRNlHIsAlsJTcaQkcWIcm4XgWm/zLG","birthday":"04.02.1997","profession":"Chef"}
        await DB.deleteUser(user2)
        let person = await DB.getUser("60afbcba6a7ce84708f02934")
        expect(person).toEqual(null)
    })
})
describe("club testing", () => {

    beforeAll(async () => {
        await DB.connectToDb()
    })
    afterAll(() => {

    });
    it("manipulates clubs", async () => {
        let club = await DB.getClubs()
        expect(club.length).toEqual(1)
        let club2 = await DB.getClub(123)
        let shouldbe = {"_id":123,"name":"Riessbach","info":"Die best Zunft wos je hets gits","logo":"/path/to/logo","primary_color":"#12342","secondary_color":"#2e2e2"}
        expect(club2).toEqual(shouldbe)
        let newone = {"_id":666,"name":"Boh","info":"Die best Zunft wos je hets gits","logo":"/path/to/logo","primary_color":"#12342","secondary_color":"#2e2e2"}
        await DB.createClub(newone)
        let newone2 = await DB.getClub(666)
        expect(newone2).toEqual(newone)
        await DB.deleteClub(newone)
        let newone3 = await DB.getClub(666)
        expect(newone3).toEqual(null)
    })

})

describe("event testing", () => {

    beforeAll(async () => {
        await DB.connectToDb()
    })
    afterAll(() => {

    });
    it("gets events", async () => {
        let event = await DB.getEvents()
        expect(event.length).toEqual(1)
    })

    it("gets event", async () => {
        let event = await DB.getEvent(1234)
        let actual = {"_id":1234,"club_id":123,"name":"6i Lüte","description":"","location":"34.0221, 75.2001","start":"timestamp","end":"timestamp","roles":["Präsident","Chef"],"responses":[{"first_name":"Max","last_name":"Muster","comment":"Komme 5 min spaeter","guest":"Monika Muster","status":0},{"first_name":"Moritz","last_name":"Mueller","comment":"","guest":"","status":1}],"attachements":[{"title":"Protokoll","description":"","file":"path/to/file"}]}
        expect(event).toEqual(actual)
    })

    it("creates and deletes event", async () => {
        let event = {"_id":7,"club_id":7,"name":"bla","description":"","location":"34.0221, 75.2001","start":"timestamp","end":"timestamp","roles":["Präsident","Chef"],"responses":[{"first_name":"Max","last_name":"Muster","comment":"Komme 5 min spaeter","guest":"Monika Muster","status":0},{"first_name":"Moritz","last_name":"Mueller","comment":"","guest":"","status":1}],"attachements":[{"title":"Protokoll","description":"","file":"path/to/file"}]}
        await DB.createEvent(event)
        let getit = await DB.getEvent(7)
        expect(getit).toEqual(event)
        await DB.deleteEvent(event)
        let gone = await DB.getEvent(7)
        expect(gone).toEqual(null)
    })

})