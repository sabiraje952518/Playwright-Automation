const { test, expect } =require('@playwright/test');


test.only("Get User",async({request})=>{       //Request fixtue for API Testing
    const response =  await request.get('https://restful-booker.herokuapp.com/booking')

    console.log(await response.json())        //Print in Json Format

    expect(response.status()).toBe(200)  //Assertions To Verify

 })

test("Create User", async ({ request }) => {
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

    console.log(await response.json());  //Print Response

    expect(response.status()).toBe(200)  //Status Verify

    var res = await response.json()

    const bookingid = res.bookingid;

})

test("Update User", async ({ request }) => {
    const response = await request.put("https://restful-booker.herokuapp.com/booking/1",
        {
            data: {
                firstname: "James",
                lastname: "Brown",
                totalprice: 111,
                depositpaid: true,
                bookingdates: {
                    checkin: "2018-01-01",
                    checkout: "2019-01-01"
                },
                additionalneeds: "Breakfast"
            },
            headers: {Accept: "application/json"}
        });

         console.log(await response.json());  //Print Response

         expect(response.status()).toBe(200)  //Status Verify

         var res = await response.json()

         const bookingid = res.bookingid;

})


test("delete User", async ({ request }) => {
    const response = await request.delete("https://restful-booker.herokuapp.com/booking/1")
    expect(response.status()).toBe(200);
  
});


