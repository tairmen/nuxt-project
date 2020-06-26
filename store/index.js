import axios from 'axios'

export const state = () => ({
    pageName: '',

})

export const mutations = {
    setPageName(state, name) {
        state.pageName = name;
    }
}

export const actions = {
    async getData({ commit }) {
        let resp = await axios.get('http://api.dev.advisorscada.com/api/location/2', {
            method: 'GET',
            headers: {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMTQ5ZjA1NWJlOTdkMjc0ZGM4NjQ2YThiN2Q5YjQwMGJkYTk2ZjkzYzNmNmZkOTM3Yjk0OTJlNjFmZDA0M2QzMDg0Mzg5Y2NkZDQzNmY1YWIiLCJpYXQiOjE1OTMxNjQ3NjQsIm5iZiI6MTU5MzE2NDc2NCwiZXhwIjoxNjI0NzAwNzY0LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.gAzDczd_wCTzgCIffJ4Uz65s3T5SY--K9yB1iytht_bkJRQOFhAnvfYXME6gkss3cSYfGvXGnM7bvhB4uvRsBqdTmRC3ntBPI__nujCY0eGEEwSZonBXlfNqUfYr0WR4h9vw8bYcAhzWDPAhO8yPKVVT6jn40HFIQNYGhVAGb8A2zLWZS5raGXxwQ9JYWWlBqXNXss9SjUHGG9lkAmEIIGn-k7iXvk-2YjgSlzuHXqu53pvqq-tJZDeAqH7Emy4eeNANqP9TQFSoIitQWAQjmnY-vIUmGXEAYaLfzLa30vjVzVIfYHOzvkOrwNdq7W9q7S31EGllq7cW3nRMuVFdPkVHbNxGxLtjlT9oycHr7tYbO4exO4fo6Bxm5tiOQet2TDmSO4TKFcr6Bmt319sM2zVWSF4jDMsbiCFW0xMJWjQUsYP-oLiTxqXaHAHbM1ZPIJ93zQI1kshJ3Gdrv29g1G5FQuEl0t1yA3eB3mymnH_pwT1gU1UkDl49LBRgoHm9H6Gyt11gVWdGT8SWTawkxkBhH9i6rb7j1KjD5AnzblXbHFoWPBX03YosvknNXfjBuQBxBc1JYt-fQ_0ZFpsycjG0tCLezj7n4K6AJQBGyHEhx1KdG2fCt_LTwwG9WbJwX_Tt3bEwfCAVjkw9WgVh8u0fZowbwjsMIOc4mjTAig4", 
                "accept": "application/json",
            },
        })
        if (resp.status == 200) {
            if (resp.data.success = true) {
                return resp.data.data;
            } else {
                console.error(resp.data);
            }
        } else {
            console.error(resp);
        }
    }
}