var mongoose = require("mongoose");
var Place = require("./models/place");
var Comment = require("./models/comment");

var data = [
    { 
        title: "Hakodate", 
        topic: "[JREast] ฮอกไกโดโทโฮคุ – EP1 Hakodate", 
        describe: "โอฮาโย! แค่ทักทายก็รู้แล้วว่ารีวิวญี่ปุ่นอีกแล้ว!! ช่วงนี้เราเดินทางไปญี่ปุ่นบ่อยมากๆ ไปมาหลายที่น่าดู แต่รีวิวครั้งนี้จะเป็นรีวิวภูมิภาคที่เราเพิ่งจะเคยไปเป็นครั้งแรก และรับรองคนไทยไม่เคยไปและอาจจะไม่รู้จักด้วยซ้ำ มันคือภูมิภาค โทโฮคุ (Tohoku) นั้นเอง แถมเราไปช่วงเดือนสิงหา ฤดูร้อน เป็นช่วงที่มีงานเทศกาลเต็มไปหมด", 
        image: "https://lh3.googleusercontent.com/hageMtTZF03_6nN3ETN2_ILKXdjMkNDZ-1KLP8WfCBvNjlUzB1KJ1vY1L9VNPBD_rvh_yD0zSKwvsA_163DUXpOljnDzA5WaRqDouff7yk3Df555n926eJN296adUPDO0G8VFW--j_wpe7alN6IUft5k0lJCS8ff2z22Gzn_uuUhEjgrqKMizMS_pRziSCrEjOXV81X1XfEzoLKoDXFiLqwE-IEk368sQ2fCj9GfSVQZmuBxP_4hffxKvSm2wK0YyCCEWoatU8I6xH1o06UgFO2iL-a2ZByKBrbpIoIyWnZwbZBWC5QYVUYiZphl3lMJdv-SboAKY0FwXxQS6tq7fgnL8y1DAs3Lll1KgMCEHmuAo-u3a_K9_dpRD1sSqnX_3NP2gbf0vtwW9BYxk7gqY1xJ2kyTuwXliUBKnBCxCBX47_3LYy3Ml_KIqXza9e4db9E6Su4R0go2Si4j7_ywzOgTrEblZ_OqhDBZ1neI9Sf8UX9iiiGgApa5gMCG3cOARbRZN9Jj2Iv8oKBJW5d3XDCdzaImbC63D4KGO9ivJJPJ4jv294VcMFSsez-cj7hC_DjbEjJVUh4yeD61d6QSu3GWn2HNgaEUF2FDgt82uiMRrOQn8w=w900-h600-no" 
    },
    { 
        title: "Philippines", 
        topic: "Whale Shark Watching", 
        describe: "Philippines 101 ดำน้ำทะเลสีฟ้าแหวกว่ายกับฉลามวาฬ 15,000 บาท สวัสดีค่ะ รีวิวฟิลิปปินส์นี้เกิดข้ึนเพราะว่าความเสี้ยนส่วนตัว เปิดแผนที่ใน AEC แล้วประเทศไหนยังไม่ได้เคยไปบ้าง (ตอนนี้ขาดบรูไน) ฟิลิปปินส์นี่แหละ และเคยดูสารคดีมากมายว่าที่นี่คือแหล่งดำน้ำชั้นดี พอได้ไปเองพบเลยว่า ประเทศนี้ถูกและดี ที่นี่นี่เอง เราเชื่อว่าอนาคตฟิลิปปินส์ต้องดังมากแน่ๆ", 
        image: "https://lh3.googleusercontent.com/lmiPILiAdN5eprPTv6iEG-iArdkTy8rI6nK7ILzeD-gZ6PsAPsZPYoxJr8KjpUv1T-jFGa7P-rbB09eOia8jDG-jsr12nITZ0uGlWNibN2V4jLmgmsueDec5QT1cj9tlEXvX6C5HiyhwoWrycHu9GKsQPmR9--LlrcrZot_TOw79_qdDp4fOam8Lq701gHcSi9lxl5k1rwcwnw0nbNxRi86-hDnBjCqAIxVM5HvaOULkt4xRdYTL2dlbeRwoYyRQeNyqa-kfvMTOClenu9lzVtE0Z0VhxO5876GXakmn7B33iQkuS1WugnVpnsHeBuBhXtYFK-CCWP3bb03u526n_l_k7zqo9G3W8v2VC6K7Lo8sEcVfNYS87W_S--9nn5nUmEaks2Ia2yhVKePC1mlFABmomY1lrfxNGYdN4B-5bUp5g5sAdPA-rFRSZKgBYNaRIvmzyLgJhypRidFBXYkRaXtbWyuB1lxNMOTk6a31rb6gidJho5KExgeukqRGJ_ukvY07ySv0axwxoqt9jqR9d9OuOuL4Zoy_UWz8XoQRd8jhgJ-QoCdyOibRWczExrWFcE1vt6qFvrEOI-arXeECUsBhNcT3aM_Y2hKMPo4kWeq0ivTA=w833-h555-no" 
    },
    { 
        title: "Sendai", 
        topic: "Hokkaido Tohoku EP3", 
        describe: "เรามาเที่ยวกันต่อจากตอนที่แล้ว นั่งชินคันเช็นจากอาโอโมริ แน่นอนเราใช้พาส JR East – South Hokaido Pass เหมือนเดิม เดินทางแค่นี้ก็คุ้มสุดแล้ว ใช้เวลาจากอาโอโมริ ถึง เซนได ประมาณ 2 ชม. พอมาถึงก็มีเจ้าหน้าที่การท่องเที่ยวประจำเซนได้มาต้อนรับเลย Musubi-Maru มาสคอตประจำเมืองเซนไดนี่เอง เป็นมาสคอตซามูไรหัวข้าวปั้น ชุดเป็นแบบของดาเตะ มาซามูเนะ  ถ้าใครชอบอ่านการ์ตูน หรือ ประวัติศาสตร์ญี่ปุ่น ต้องรู้จักแน่ๆ มังกรตาเดียวแห่งเซนได ดาเตะ มาซามูเนะ เท่มาก", 
        image: "https://lh3.googleusercontent.com/nFmzN7MdPcI8qXqGvEH0AmCf-MmjkkYjXGvrRVGduLiRBgCHscH6Wo1Csmrrd5sN5TyY9sKCPRBh8N1oP9bbSkJzgIxX86AumAgZ09zSwIBODHVyZywZe7s49zdrjjx_Ov2zk2Vm5LvCyr7Iyw7_CmkVh1LImLcVmFpvrVB2E9fX6uOmdQ-7E7CfWGvv6swubq0WETzflUBW0ppK4zBjaA8XG9rUB9zL9vb8CywR14VjVvR-ECqpvW44R4wA-ZrOKnvBS45Tl969ZJRh_3C0BoaW8HmdDKbr1SSQqMxpbOEKBxefyzMMgoglRJBwpVjqMv-vM6Tq6_LQhw7ldgBF1loH1rUfKppuBWXCAaXEowYviZXJqHWfuVHm_DgGLIrqJ-BVFc4uFjd5KEVJO00OYup82nkOJXwSUoPbbilvn9eRT8fLPYnfOs0DF3TSvtpZTxrhcdE0b6PAO8r9f955s-4cqihbijFJZCxBXns8qLdfTB5bqJMMCUzZHwYO3zaHbx2eV1yBcSLgsqU7GZmby81te2lxlR275eKMCkrDYTpV1paXDRgS2NuqOkQQUjeqfy5nC-Robi50ZEtfQSzqy303z0bYiCt2w9SpDnNDaVIa_2ZwmQ=w900-h600-no" 
    },
]

function seedDB() {
    //Remove all places
    Place.remove({}, function (err) {
        if (err) {
            console.log(err)
        }
        console.log("removed places!")
        //add a few places
        data.forEach(function (seed) {
            Place.create(seed, function (err, place) {
                if (err) {
                    console.log(err)
                } else {
                    console.log("added a place");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great",
                            author: "Homer"
                        }, function(err, comment) {
                            if(err){
                                console.log(err);
                            } else{
                                place.comments.push(comment);
                                place.save()
                                console.log("Created new comment");
                            }
                        });
                }
            })
        });
    });
}

module.exports = seedDB;
