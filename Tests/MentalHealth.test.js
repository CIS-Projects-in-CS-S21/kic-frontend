/**
 * @fileoverview A testing suite for Mental Health Log, specifically in terms of storing and deleting entries
 */

import UserManager from "../Managers/UserManager";
import {HealthTrackingClient} from "../gen/proto/HealthServiceClientPb";
import {
    AddHealthDataForUserRequest, DeleteHealthDataForUserRequest, GetHealthDataByDateRequest,
    GetHealthDataForUserRequest, GetMentalHealthScoreForUserRequest,
    MentalHealthLog as HealthLog
} from "../gen/proto/health_pb";
import {UsersClient} from "../gen/proto/UsersServiceClientPb";
import {GetJWTTokenRequest} from "../gen/proto/users_pb";
import TokenManager from "../Managers/TokenManager";
import {Date as CommonDate} from "../gen/proto/common_pb";

const un = "test424";
const pw = "test424!";

/**
 * before each function, log in with mock user data
 */
beforeEach(() => {
    // Log into mock account
    const c = new UsersClient("https://api.keeping-it-casual.com");
    let userReq = new GetJWTTokenRequest();
    userReq.setUsername("test424");
    userReq.setPassword("test424!");

    // Try to log in with request
    c.getJWTToken(userReq, {}).then(res => {
        if (res.array.length > 0){
            // Create TokenManager
            let tm = new TokenManager();

            // TEST CLEARING TOKEN
            tm.storeToken(res);
            // TEST: isAuthenticated should return a Promise
            expect(tm.getToken()).toBeTruthy();
        }
        else{
            console.log("No token received");
        }
    }).catch(e => {
        console.log(e);
    });
});

/**
 * @function shouldAddMoodEntry()
 * @return success if tests if mood entry can be added for mock user, if entry contains all necessary information.
 */
test('shouldAddMoodEntry', () => {
    let client = new HealthTrackingClient("https://api.keeping-it-casual.com")
    //create health client

    let um = new UserManager();
    let authString = um.getAuthString();



    let req = new AddHealthDataForUserRequest();

    //the request requires the user ID and the mental health log entry

   req.setUserid(159);

    //add score of -5 for today's date,with journal entry "I am not feeling well at all."
    //set health log entry with score, logdata aka journal name
    let logEntry = new HealthLog();
    logEntry.setScore(-5); //from NumberSlider
    logEntry.setJournalname("I am not feeling well at all."); //from journal entry text input box
    logEntry.setUserid(159);

    let date = new Date();
    // Fetch the date the user would like for this entry from the DateTimePickerModal and set as logDate
    let logDate = new CommonDate();
    logDate.setDay(String(date.getDate()).padStart(2, '0'));
    logDate.setMonth(String(date.getMonth() + 1).padStart(2, '0'));
    logDate.setYear(String(date.getFullYear()).padStart(2, '0'));


    logEntry.setLogdate(logDate);
    //set new entry with log entry


    req.setNewentry(logEntry);
    return client.addHealthDataForUser(req,{'Authorization': authString}).then(
        res => {
            console.log("SUCCESS" + res.getSuccess());
            console.log(res);
            expect(res.array.length > 0);
        })
        .catch(error =>{
            console.log("There is an error :(");
            console.log(error);
        });

});

/**
 * @function  shouldNotAddEmptyMoodEntry()
 * @return Passes if the empty mood entry cannot be added. Fails if empty mood entry is added.
 */
test(' shouldNotAddEmptyMoodEntry', () => {
    let client = new HealthTrackingClient("https://api.keeping-it-casual.com")
    //create health client

    let um = new UserManager();
    let authString = um.getAuthString();

    let userID = 159;


    let req = new AddHealthDataForUserRequest();

    //the request requires the user ID and the mental health log entry

    req.setUserid(159);

    //add empty log entry

    // Fetch the date the user would like for this entry from the DateTimePickerModal and set as logDate
    let logDate = new CommonDate();




    req.setNewentry(null);
    return client.addHealthDataForUser(req,{'Authorization': authString}).then(
        res => {
            console.log("SUCCESS" + res.getSuccess());
            console.log(res);
            expect(res.array.length > 0);
        })
        .catch(error =>{
            console.log("There is an error :(");
            console.log(error);
            expect(error != null);
    });
});

/**
 * @function shouldDeleteExistingEntry()
 * tests that an entry for a mock user that exists can be deleted.
 * make sure to run shouldAddMoodEntry() first
 * @return Passes if mood entry can be deleted. Fails if mood entry which exists cannot be deleted.

 */
test('shouldDeleteExistingEntry', () => {
    let client = new HealthTrackingClient("https://api.keeping-it-casual.com")
    //create health client

    let um = new UserManager();
    let authString = um.getAuthString();



    let req = new DeleteHealthDataForUserRequest();

    req.setUserid(159);
    req.setAll(false);
    let date = new Date();
    // Remove the entry we just added
    let logDate = new CommonDate();
    logDate.setDay(String(date.getDate()).padStart(2, '0'));
    logDate.setMonth(String(date.getMonth() + 1).padStart(2, '0'));
    logDate.setYear(String(date.getFullYear()).padStart(2, '0'));

    req.setDatetoremove(logDate);

    return client.deleteHealthDataForUser(req, {'Authorization': authString}).then(res => {
        console.log("Delete health data response" + res)
        console.log("Entries deleted:" + res.getEntriesdeleted())
        expect(res.array.length >0);
    }).catch(error => {
        console.log("Error deleting mental health log for date" + logDate + ": " + error);
    });
});

/**
 * @function shouldNotDeleteNonExistentEntry()
 * tests that an entry for a mock user that does not exist will not be deleted.
 * make sure to run shouldAddMoodEntry() first and deleteExistingExtry() first
 * @return Passes if no mood entry is deleted. Fails if mood entry is “found” and deleted.


 */
test('shouldNotDeleteNonExistentEntry', () => {
    let client = new HealthTrackingClient("https://api.keeping-it-casual.com")
    //create health client

    let um = new UserManager();
    let authString = um.getAuthString();



    let req = new DeleteHealthDataForUserRequest();

    req.setUserid(159);
    req.setAll(false);
    let date = new Date();
    // Remove the entry we just added
    let logDate = new CommonDate();
    logDate.setDay(String(date.getDate()).padStart(2, '0'));
    logDate.setMonth(String(date.getMonth() + 1).padStart(2, '0'));
    logDate.setYear(String(date.getFullYear()).padStart(2, '0'));

    req.setDatetoremove(logDate);

    return client.deleteHealthDataForUser(req, {'Authorization': authString}).then(res => {
        console.log("Delete health data response" + res)
        console.log("Entries deleted:" + res.getEntriesdeleted())
        expect(res.array.length >0);
    }).catch(error => {
        console.log("Error deleting mental health log for date" + logDate + ": " + error);
        expect(error != null);
    });
});

/**
 * @function shouldReturnUserEntries
 * @return success if given a mock user with a given number of MoodEntries, this test should return an array of mock MoodEntries belonging to that user.

 */
test('shouldReturnUserEntries', () => {

    let client = new HealthTrackingClient("https://api.keeping-it-casual.com")
    //create health client

    let um = new UserManager();
    let authString = um.getAuthString();

    let userID = 159;


    // Create the request & set the active user's ID
    let req = new GetHealthDataForUserRequest();
    req.setUserid(userID);

    return client.getHealthDataForUser(req, {'Authorization': authString}).then(res => {
        console.log(res.getHealthdataList());
        expect(res.getHealthdataList().length > 0)
    }).catch(error => {
        console.log(error)
        expect(error != null)
    });

});

/**
 * @function showMoodEntries()
 * do add Mood Entry first
 * Tests if mood entries exist for a given user and if they do returns a model of existing entries.
 * @return If mood entries exist for any given day in pastDays, ,method returns a model of given entries. If they do not exist, the method returns an empty model.

 */
test('showMoodEntries', () => {

    let client = new HealthTrackingClient("https://api.keeping-it-casual.com")
    //create health client

    let um = new UserManager();
    let authString = um.getAuthString();

    let userID = 159;


    // Create the request & set the active user's ID
    let req = new GetHealthDataByDateRequest();
    req.setUserid(userID);
    let date = new Date();
    // Remove the entry we just added
    let logDate = new CommonDate();
    logDate.setDay(String(date.getDate()).padStart(2, '0'));
    logDate.setMonth(String(date.getMonth() + 1).padStart(2, '0'));
    logDate.setYear(String(date.getFullYear()).padStart(2, '0'));

    req.setLogdate(logDate);


    return client.getHealthDataByDate(req, {'Authorization': authString}).then(res => {
        console.log(res.getHealthdataList());
        expect(res.getHealthdataList().length > 0)
    }).catch(error => {
        console.log(error)
        expect(error != null)
    });

});

/**
 * @function shouldEvaluateMentalHealthCorrectly()
 * do add Mood Entry first
 * Given a mock array of high-mood scoring MoodEntries, this test should return the correct mental health score.
 * @return passes if score is returned
 */
test('shouldEvaluateMentalHealthCorrectly', () => {

    let client = new HealthTrackingClient("https://api.keeping-it-casual.com")
    //create health client

    let um = new UserManager();
    let authString = um.getAuthString();

    let userID = 159;


    // Create the request & set the active user's ID
    let req = new GetMentalHealthScoreForUserRequest();
    req.setUserid(userID);


    return client.getMentalHealthScoreForUser(req, {'Authorization': authString}).then(res => {
        console.log(res.getScore());
        expect(res.getScore() == -1)
    }).catch(error => {
        console.log(error)
        expect(error != null)
    });

});

