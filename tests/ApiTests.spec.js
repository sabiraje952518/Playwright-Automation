const { test, expect } =require('@playwright/test');


// test.only("Get User",async({request})=>{       //Request fixtue for API Testing
//     const response =  await request.get('https://restful-booker.herokuapp.com/booking')

//     console.log(await response.json())

//     expect(response.status()).toBe(200)

// // })

test.only("Create User", async ({ request }) => {
    const response = await request.post("https://restful-booker.herokuapp.com/booking",
        {
            data: {
                firstname: "Sabi",
                lastname: "Raje",
                totalprice: 111,
                depositpaid: true,
                bookingdates: {
                    checkin: "2018-01-01",
                    checkout: "2019-01-01"
                },
                additionalneeds: "Breakfast"
            },
            headers: {
                Accept: "application/json"
            }
        }
);

    console.log(await response.json());

    expect(response.status()).toBe(200)

    var res = await response.json()

    const bookingid = res.bookingid;

})
