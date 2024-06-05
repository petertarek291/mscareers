const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());
app.get("/api", (req, res) => {
  res.json(
    [
      {
        title: "Software Engineer - Microsoft Advertising (WEBXT)",
        date_posted: "Apr 29, 2012",
        job_number: "1105720",
        profession: "Software Engineering",
        Overview:
          "The Bidding Platform team provides the buy-side platform on which advertisers in our marketplace can access inventory and transact their ad campaigns with high efficiency and at high volume. As an Engineer in our team, you will be making technical contributions to our real-time platform in support of our growing business. ",
        Responsibilities:
          "As part of operating a best-in-class global platform, you will bring strong engineering practices and processes, excel at operating and supporting high volume and highly critical business systems on a global scale. You act as a C developer operating in Unix environments, and makes direct technical contributions to our system. You will work on high performance multi-threaded application and distributed systems, operating at high QPS, will help us propel our business growth. As part of a highly collaborative team, you will work with internal product and engineering teams, and contribute technical solutions for our strategic needs You are passionate about learning and growing, and working with other engineers in the team on all aspects of world class software development.",
      },

      {
        title: "Snr Software Engineer - Microsoft Advertising",
        date_posted: "Apr 29, 2013",
        job_number: "1612317",
        profession: "Software Engineering",
        Overview:
          "As an integral part of the Web Experiences WebXT / Microsoft Advertising division, our mission is to deliver rich and engaging content, services, and platforms that cater to consumers’ information needs across all devices and to businesses seeking to improve their employee and customer engagement. Join the Invest Bidder team, a leader in global ad decision systems, providing a sophisticated buy-side platform that enables advertisers in our marketplace to procure inventory and execute their advertising campaigns with efficiency. Within our team, we are responsible for the development and upkeep of the real-time Bidder application, a key component of our globally distributed system. This application is designed to bid on auctions with minimal latency, utmost reliability, and substantial volume, playing a crucial role in conducting transactions on behalf of our clientele and our enterprise.As a member of this team, you will contribute to this technically demanding and fulfilling application, collaborating closely with a diverse, international group of professionals.    ",
        Responsibilities:
          "You will be building highly efficient and reliable technical solutions for our large scale and evolving real-time business systems by making key contributions to our Invest Bidder realtime platform.You act as an engineering role model with strong C developer experience in Unix environments, and makes impactful technical contributions to our system.Your experience with multi-threaded application and distributed systems, operating at high QPS, will help us propel our business growth.As part of a highly collaborative team, you will coordinate with international product and engineering teams, and contribute technical solutions for our strategic needsAs part of operating a best-in-class global platform, you will bring strong engineering practices and processes, excel at operating and supporting high volume and highly critical business systems on a global scale",
      },
      {
        title: "Software Engineer 2 - Microsoft Advertising (WEBXT)",
        date_posted: "Apr 29, 2014",
        job_number: "17012720",
        profession: "Software Engineering",
        Overview:
          "The Bidding Platform team provides the buy-side platform on which advertisers in our marketplace can access inventory and transact their ad campaigns with high efficiency and at high volume. As an Engineer in our team, you will be making technical contributions to our real-time platform in support of our growing business. ",
        Responsibilities:
          "As part of operating a best-in-class global platform, you will bring strong engineering practices and processes, excel at operating and supporting high volume and highly critical business systems on a global scale. You act as a C developer operating in Unix environments, and makes direct technical contributions to our system. You will work on high performance multi-threaded application and distributed systems, operating at high QPS, will help us propel our business growth. As part of a highly collaborative team, you will work with internal product and engineering teams, and contribute technical solutions for our strategic needs You are passionate about learning and growing, and working with other engineers in the team on all aspects of world class software development.",
      },
      {
        title: "Software Engineer 3 - Microsoft Advertising (WEBXT)",
        date_posted: "Apr 29, 2015",
        job_number: "1705720",
        profession: "Software Engineering",
        Overview:
          "The Bidding Platform team provides the buy-side platform on which advertisers in our marketplace can access inventory and transact their ad campaigns with high efficiency and at high volume. As an Engineer in our team, you will be making technical contributions to our real-time platform in support of our growing business. ",
        Responsibilities:
          "As part of operating a best-in-class global platform, you will bring strong engineering practices and processes, excel at operating and supporting high volume and highly critical business systems on a global scale. You act as a C developer operating in Unix environments, and makes direct technical contributions to our system. You will work on high performance multi-threaded application and distributed systems, operating at high QPS, will help us propel our business growth. As part of a highly collaborative team, you will work with internal product and engineering teams, and contribute technical solutions for our strategic needs You are passionate about learning and growing, and working with other engineers in the team on all aspects of world class software development.",
      },
      {
        title: "Digital Creator",
        date_posted: "May 1, 2015",
        job_number: "170522720",
        profession: "Software Engineering",
        Overview:
          "The Bidding Platform team provides the buy-side platform on which advertisers in our marketplace can access inventory and transact their ad campaigns with high efficiency and at high volume. As an Engineer in our team, you will be making technical contributions to our real-time platform in support of our growing business. ",
        Responsibilities:
          "As part of operating a best-in-class global platform, you will bring strong engineering practices and processes, excel at operating and supporting high volume and highly critical business systems on a global scale. You act as a C developer operating in Unix environments, and makes direct technical contributions to our system. You will work on high performance multi-threaded application and distributed systems, operating at high QPS, will help us propel our business growth. As part of a highly collaborative team, you will work with internal product and engineering teams, and contribute technical solutions for our strategic needs You are passionate about learning and growing, and working with other engineers in the team on all aspects of world class software development.",
      },
    ]    
    
  );
});
app.listen(5000, () => {
  console.log("server started on 5000");
});
