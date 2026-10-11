// Variable ตัวแปร
// เป็นชื่อที่ Dev. กำหนดขึ้นมาเอง เอาไว้เก็ยคาข้อมูล
// ประกาศตัวเพื่อเอาไปใช้งานมี 3 วิธี
var scoreMidterm = 80
let scoreFinal = 75
const scoreTotal = 155

scoreMidterm = 80
scoreFinal = 75

// scoreTotal = 1000 Error
{
    var a = 10
    let b = 20
    const c = 30
    {
        var a = 10
        let b = 25
        const c = 35
        {
            var a = 10
            let b = 30
            const c = 40
        }
    }
}


