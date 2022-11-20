import getAPIClient from "./APIClient";

export async function getHabitsList() {
    let getHabitsListPromise = {succeded: false};

        await getAPIClient().request(
            "GET",
            "habits",
            {},
            {}
         ).then((response) => {
            getHabitsListPromise.succeded = true;
            getHabitsListPromise.data = response.data;
            getHabitsListPromise.requestStatus = response.status;
         }).catch((error) => {
            getHabitsListPromise.succeded = false;
            console.log(error);
         });

         return new Promise(resolve => resolve(getHabitsListPromise));
};


