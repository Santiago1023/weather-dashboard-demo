## DevOps Challenge: Day 1 (Weather Dashboard)

### Project Overview
This is a project that extract data from an API call, and store it in AWS S3 bucket.

**Tools:**
- External API (OpenWeather API)
- Cloud service (AWS S3)
- Python

**Prerequisites:**
- AWS account
- Python installed
- AWS CLI installed
- OpenWeather API key
- Visual Studio Code installed

### Steps

1. Create an AWS account [(create free account)](https://aws.amazon.com/es/free/?nc1=h_ls&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all "(create free account)")
2. Clone the project (Note: this project is based on the original)
`git clone https://github.com/Santiago1023/weather-dashboard-demo.git`
3. Type in the console:
`pip install -r requirements.txt`
4. Use AWS IAM to connect from your local environment to cloud environment.

	[AWS Identity and Access Management (IAM)](https://docs.aws.amazon.com/en_us/iam/ "AWS IAM Documentation") is a web service for securely controlling access to AWS services. With IAM, you can centrally manage users, security credentials such as access keys, and permissions that control which AWS resources users and applications can access.
	IAM user is an identity that represents a person that interacts with aws services and resources.
	IAM group is a collection of IAM users. You can associate a policy to a group, and all users within are granted permissions specified by the policy.
	- First, type IAM in the searchbar:
![iam-serachbar](/imagenes/iam-serachbar.png)
	- Select user groups and click in create group button
![create-group1.png](/imagenes/create-group1.png)
	- Type the user group name, search AmazonS3FullAccess, and click in create user group
![create-group2.png](/imagenes/create-group2.png)
	- Select Users and click in create user button
![create-user1.png](/imagenes/create-user1.png)
	- Type the user name, check the checkbox, and add a password
![create-user2.png](/imagenes/create-user2.png)
	- Click on next button
![create-user3.png](/imagenes/create-user3.png)
	- Add the user to the group and click next button
![create-user4.png](/imagenes/create-user4.png)
	- Review the information and click create user button
![create-user5.png](/imagenes/create-user5.png)
	- Check the user creation success
![create-user6.png](/imagenes/create-user6.png)
	- Select the user, click in security credentials and search the create access key button
![access-key1.png](/imagenes/access-key1.png)
	- Select the user, click in security credentials and click the create access key button, check the checkbox, click in next
![access-key1.png](/imagenes/access-key1.png)
	- Type a tag
![access-key2.png](/imagenes/access-key2.png)
	- Check the acces key creation message, copy the access key and the secret key. (NOTE: YOU MUST NO SHARE YOUR CREDENTIALS WITH ANYONE!!)
5. In VSCode terminal type:
	`aws configure`
	Enter your credentials with the default region you want.
6. Explore [the weather api](https://openweathermap.org/api "the weather api") , sign up and check your email to obtain the api access key.
7. Create a .env file with the following data:
	`OPENWEATHER_API_KEY=your_api_key`
	`AWS_BUCKET_NAME=your_bucket_name`
8. Run the following command to execute your project:
	`cd src`
	`python weather_dashboard.py`
9. Review the console

![console.png](/imagenes/console.png)

10. Review the s3 service
![s3-bucket.png](/imagenes/s3-bucket.png)
11. That's all, study these topics, try it and share with others.

#### With love and grateful to people who creates these projects:
[Day 1 explanation](https://www.youtube.com/watch?v=A95XBJFOqjw "Day 1")
[Original code](https://github.com/ShaeInTheCloud/30days-weather-dashboard/tree/main "original code")
[DevOps Challenges info](https://www.linkedin.com/posts/deshae-lyda_30-day-devops-challenge-day-1-devopsallstarschallenge-activity-7282060035038359552-yUpd?utm_source=share&utm_medium=member_desktop "DevOps Challenges info")

