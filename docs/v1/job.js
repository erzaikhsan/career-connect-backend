/**
 * @swagger
 * components:
 *  $ref: './components.js#/components'
 */

/**
 * @swagger
 * tags:
 *  name: Jobs
 *  description: API operations related to jobs
 */

/**
 * @swagger
 * /jobs:
 *  get:
 *    summary: Get all jobs
 *    description: Getting all job data
 *    tags: [Jobs]
 *    parameters:
 *      - in: query
 *        name: page
 *        schema:
 *          type: integer
 *          minimum: 1
 *          default: 1
 *        description: Page number for pagination
 *      - in: query
 *        name: keyword
 *        schema:
 *          type: string
 *        description: Search term for job names and location
 *      - in: query
 *        name: job_type
 *        schema:
 *          type: string
 *          enum: ["wfh", "wfo", "WFH", "WFO"]
 *        description: Search term for job types
 *    responses:
 *      '200':
 *        description: Successfull response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                      status:
 *                          example: Success
 *                      pagination:
 *                          type: object
 *                          properties:
 *                              page:
 *                                type: string
 *                                example: 1
 *                              perPage:
 *                                type: integer
 *                                example: 12
 *                              total:
 *                                type: integer
 *                                example: 2
 *                              totalPages:
 *                                type: integer
 *                                example: 1
 *                      data:
 *                          example:
 *                                - id: 1
 *                                  companies_id: 2
 *                                  company_name: TechWork
 *                                  company_photo: photo/default/company.png
 *                                  name: "IT Support"
 *                                  description: "Work as IT Support"
 *                                  location: "Jakarta, Wakanda"
 *                                  category: "Technology"
 *                                  job_type: "WFH"
 *                                  salary: "3000000"
 *                                  capacity: 10
 *                                  closing_date: "2023-11-30T00:00:00.000Z"
 *                                  is_open: true
 *                                  createdAt: "2023-11-11T13:42:11.304Z"
 *                                  updatedAt: "2023-11-11T13:42:11.304Z"
 *                                - id: 2
 *                                  companies_id: 4
 *                                  company_name: HealthCare
 *                                  company_photo: photo/default/company.png
 *                                  name: "Human Resouces"
 *                                  description: "Work as Human Resouces"
 *                                  location: "Surabaya, Wakanda"
 *                                  category: "Human_Resources"
 *                                  job_type: "WFO"
 *                                  salary: "2500000"
 *                                  capacity: 5
 *                                  closing_date: "2023-11-30T00:00:00.000Z"
 *                                  is_open: true
 *                                  createdAt: "2023-11-11T13:42:11.304Z"
 *                                  updatedAt: "2023-11-11T13:42:11.304Z"
 *      '400':
 *        $ref: '#/components/responses/InvalidInput'
 *      '405':
 *        $ref: '#/components/responses/MethodNotAllowed'
 *      '500':
 *        $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /jobs:
 *   post:
 *     summary: Create Job
 *     description: Creating Job
 *     tags: [Jobs]
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/jobs'
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                    status:
 *                      example: Success
 *                    message:
 *                      example: Job Created
 *       '400':
 *         $ref: '#/components/responses/InvalidInput'
 *       '401':
 *         $ref: '#/components/responses/InvalidToken'
 *       '409':
 *         description: Already exist
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                    status:
 *                      example: failed
 *                    message:
 *                      example: Job already exist
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
/**
 * @swagger
 * /jobs/{id}:
 *   get:
 *     summary: Get Job by id
 *     description: Getting job data by id
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: id of job to getting data job
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                  type: object
 *                  properties:
 *                    status:
 *                      type: string
 *                      example: Success
 *                    data:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: integer
 *                          example: 1
 *                        companies_id:
 *                          type: integer
 *                          example: 6
 *                        company_name:
 *                          type: string
 *                          example: EcoEnergy
 *                        company_photo:
 *                          type: string
 *                          example: photo/default/company.png
 *                        name:
 *                          type: string
 *                          example: Renewable Energy Engineer
 *                        description:
 *                          type: string
 *                          example: Work as a Renewable Energy Engineer at EcoEnergy
 *                        what_will_you_do:
 *                          type: string
 *                          example: "[\"Design and test renewable energy systems\",\"Conduct energy audits\",\"Develop energy conservation plans\"]"
 *                        what_will_you_need:
 *                          type: string
 *                          example: "[\"Degree in Engineering\",\"good communication skills\",\"Experience with renewable energy systems\",\"Knowledge of energy conservation techniques\"]"
 *                        location:
 *                          type: string
 *                          example: Medan, Indonesia
 *                        category:
 *                          type: string
 *                          example: Energy
 *                        job_type:
 *                          type: string
 *                          example: WFH
 *                        salary:
 *                          type: string
 *                          example: "5000000"
 *                        capacity:
 *                          type: integer
 *                          example: 5
 *                        closing_date: 
 *                          type: string
 *                          format: date
 *                          example: "2023-11-30T00:00:00.000Z"
 *                        is_open:
 *                          type: boolean
 *                          example: true
 *       '400':
 *          $ref: '#/components/responses/InvalidInput'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /jobs/company/{id}:
 *   get:
 *     summary: Get Job by company id
 *     description: Getting job data by company id
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: id of company to getting data job
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                  type: object
 *                  properties:
 *                    status:
 *                      type: string
 *                      example: Success
 *                    data:
 *                          example:
 *                                - id: 1
 *                                  companies_id: 2
 *                                  name: "IT Support"
 *                                  description: "Work as IT Support"
 *                                  location: "Jakarta, Wakanda"
 *                                  category: "Technology"
 *                                  job_type: "WFH"
 *                                  salary: "3000000"
 *                                  capacity: 10
 *                                  closing_date: "2023-11-30T00:00:00.000Z"
 *                                  is_open: true
 *                                  createdAt: "2023-11-11T13:42:11.304Z"
 *                                  updatedAt: "2023-11-11T13:42:11.304Z"
 *                                - id: 3
 *                                  companies_id: 2
 *                                  name: "Backend Developer"
 *                                  description: "Making Backend Environment for an event"
 *                                  location: "Jakarta, Wakanda"
 *                                  category: "Technology"
 *                                  job_type: "WFH"
 *                                  salary: 5000000
 *                                  capacity: 10
 *                                  closing_date: "2023-11-30T00:00:00.000Z"
 *                                  is_open: true
 *                                  createdAt: "2023-11-16T19:14:25.097Z"
 *                                  updatedAt: "2023-11-16T19:14:25.097Z"
 *       '400':
 *          $ref: '#/components/responses/InvalidInput'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /jobs/{id}:
 *   put:
 *     summary: Edit Job by id
 *     description: Edit job data by id
 *     tags: [Jobs]
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: id of job to edit
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/jobs'
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                    status:
 *                      example: Success
 *                    message:
 *                      example: Job Updated
 *       '400':
 *         $ref: '#/components/responses/InvalidInput'
 *       '401':
 *         $ref: '#/components/responses/InvalidToken'
 *       '403':
 *         $ref: '#/components/responses/PermissionDenied'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '409':
 *         description: Already exist
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                    status:
 *                      example: failed
 *                    message:
 *                      example: Jobs already exists
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /jobs/{id}:
 *   delete:
 *     summary: Delete Job by id
 *     description: Delete job data by id
 *     tags: [Jobs]
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: id of job to delete
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                  type: object
 *                  properties:
 *                    status:
 *                      type: string
 *                      example: Success
 *                    message:
 *                      type: string
 *                      example: Job Deleted
 *       '400':
 *          $ref: '#/components/responses/InvalidInput'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */
