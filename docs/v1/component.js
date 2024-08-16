/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *   responses:
 *     NotFound:
 *       description: Resource not found
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                  example: failed
 *               message:
 *                  example: Not found
 *     InvalidToken:
 *       description: Invalid token provided
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                  example: failed
 *               message:
 *                  example: Invalid or expired token
 *     InvalidInput:
 *       description: Invalid input provided
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                  example: failed
 *               message:
 *                  example: Invalid input
 *     PermissionDenied:
 *       description: Permission denied
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                  example: failed
 *               message:
 *                  example: You don't have access
 *     MethodNotAllowed:
 *       description: Method not allowed
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                  example: failed
 *               message:
 *                  example: Method not allowed
 *     InternalServerError:
 *       description: Internal server error
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                  example: failed
 *               message:
 *                  example: Internal server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     company:
 *       type: object
 *       properties:
 *         file:
 *           type: file
 *           format: file
 *           description: file of photo_profile
 *           example: photo.png
 *         name:
 *           type: string
 *           description: name of company
 *           example: company name
 *         type:
 *           type: string
 *           enum: [Technology,Healthcare,Finance,Education,Retail,Entertainment,Manufacturing,Consulting,Energy]
 *           description: type of company
 *           example: Energy
 *         description:
 *           type: string
 *           description: describe your company
 *           example: this company bla bla bla
 *         website:
 *           type: string
 *           description: websites oficial of company
 *           example: company.com
 *         email:
 *           type: string
 *           description: email of companay
 *           example: company@mail.com
 *         phone_number:
 *           type: string
 *           description: phone_number of company
 *           example: 02314687201
 *         address:
 *           type: string
 *           description: addres of company
 *           example: Jl.soekarno Hatta bla bla
 *     jobs:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Name of job
 *           example: Frontend Developer
 *         description:
 *           type: string
 *           description: describe the job
 *           example: Making Frontend Environment for an event
 *         what_will_you_do:
 *           type: array
 *           items:
 *             type: string
 *           description: what will jobseeker do in this job
 *           example: ["Provide IT support to staff and customers", "Troubleshoot hardware and software issues", "Maintain IT infrastructure"]
 *         what_will_you_need:
 *           type: array
 *           items:
 *             type: string
 *           description: what will jobseeker do in this job
 *           example: ["Experience in IT support, good communication skills", "Experience with hardware and software troubleshooting", "Experience in IT infrastructure maintenance"]
 *         location:
 *           type: string
 *           description: Location of Job
 *           example: Bandung, Wakanda
 *         category:
 *           type: string
 *           enum: [Information, Technology, Healthcare, Finance, Education, Sales, Marketing, Engineering, Customer_Service, Human_Resources]
 *           description: Category of Job
 *           example: Technology
 *         job_type:
 *           type: string
 *           enum: [WFH, WFO]
 *           description: Type of working is it Work From Office or Home
 *           example: WFH
 *         salary:
 *           type: integer
 *           minimum: 1000
 *           description: Salary for the job
 *           example: 5000000
 *         capacity:
 *           type: integer
 *           minimum: 1
 *           description: Capacity for the job
 *           example: 5
 *         closing_date:
 *           type: string
 *           format: date
 *           description: The date when the job application closes
 *           example: '2023-12-31'
 *     jobseeker:
 *       type: object
 *       properties:
 *         jobseekers_id:
 *           type: integer
 *           description: User ID
 *           example: 1
 *         email:
 *           type: string
 *           description: User email
 *           example: jobseeker0@gmail.com
 *         role:
 *           type: string
 *           description: User role
 *           example: jobseeker
 *         photo_profile:
 *           type: string
 *           description: Path to the user's photo profile
 *           example: public/uploads/default/man.png
 *         full_name:
 *           type: string
 *           description: User's full name
 *           example: John Doe
 *         bio:
 *           type: string
 *           description: Bio of the user as a job seeker
 *           example: Bio of me as Job Seeker
 *         gender:
 *           type: string
 *           description: User's gender
 *           example: M
 *         phone_number:
 *           type: string
 *           description: User's phone number
 *           example: +6281312345565
 *         address:
 *           type: string
 *           description: User's address
 *           example: Jln. Abal-abal, Jakarta, Wakanda
 *         place_of_birth:
 *           type: string
 *           nullable: true
 *           description: User's place of birth
 *           example: null
 *         date_of_birth:
 *           type: string
 *           format: date-time
 *           description: User's date of birth
 *           example: 2000-07-11T16:00:00.000Z
 *         cv_path:
 *           type: string
 *           nullable: true
 *           description: Path to the user's CV
 *           example: null
 *         portfolio_path:
 *           type: string
 *           nullable: true
 *           description: Path to the user's portfolio
 *           example: null
 *         on_work:
 *           type: boolean
 *           description: Indicates if the user is currently on work
 *           example: false
 */
