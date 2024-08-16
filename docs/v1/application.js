/**
 * @swagger
 * components:
 *  $ref: './components.js#/components'
 */

/**
 * @swagger
 * tags:
 *   name: Applications
 *   description: API operations related to Applications
 */

/**
 * @swagger
 * /apply/job/{id}:
 *   post:
 *     summary: Create Application
 *     description: Applying job
 *     tags: [Applications]
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: id of job to apply (jobseeker only)
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
 *                      example: Apply Successfull
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
 *                      example: Apply already exist
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /apply/seeker:
 *   get:
 *     summary: Get Applications data from what jobseeker apply
 *     description: getting applications from what jobseeker apply
 *     tags: [Applications]
 *     security:
 *        - bearerAuth: []
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
 *                    data:
 *                      example:
 *                          - jobseekers_id: 7
 *                            jobs_id: 1
 *                            job_name: IT Support
 *                            location: Jakarta, Wakanda
 *                            company_name: TechCompany
 *                            company_photo: "photo/default/company.png"
 *                            status: interview
 *                          - jobseekers_id: 7
 *                            jobs_id: 2
 *                            job_name: Human Resources
 *                            location: Surabaya, Wakanda
 *                            company_name: HealthCare
 *                            company_photo: "photo/default/company.png"
 *                            status: pending
 *
 *       '401':
 *         $ref: '#/components/responses/InvalidToken'
 *       '403':
 *         $ref: '#/components/responses/PermissionDenied'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /apply/job/{id}:
 *   get:
 *     summary: Get Applications data from job id
 *     description: getting applications from one specific job
 *     tags: [Applications]
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: id of job to see the applications (company only)
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
 *                    data:
 *                      example:
 *                          - jobseekers_id: 1
 *                            jobs_id: 1
 *                            jobseeker_name: John Doe
 *                            jobseeker_photo: photo/default/man.png
 *                            jobseeker_address: Jln. Abal-abal, Jakarta, Wakanda
 *                            gender: M
 *                            date_of_birth: 2002-04-13T16:00:00.000Z
 *                            cv_jobseeker: jobseekers/cv/1/cv.pdf
 *                            phone_number: '+6281312345565'
 *                            email: jobseeker0@gmail.com
 *                            status: pending
 *                            age: 23
 *                          - jobseekers_id: 3
 *                            jobs_id: 1
 *                            jobseeker_name: Marry Doe
 *                            jobseeker_photo: photo/default/woman.png
 *                            jobseeker_address: Jln. Masih Abal-abal, Surabaya, Wakanda
 *                            gender: F
 *                            date_of_birth: 2002-04-13T16:00:00.000Z
 *                            cv_jobseeker: jobseekers/cv/3/cv.pdf
 *                            phone_number: '+628131232355365'
 *                            email: jobseeker1@gmail.com
 *                            status: pending
 *                            age: 21
 *
 *       '401':
 *         $ref: '#/components/responses/InvalidToken'
 *       '403':
 *         $ref: '#/components/responses/PermissionDenied'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /apply/seeker/{jobId}:
 *   put:
 *     summary: Edit Job status by id to cancel it by jobseeker
 *     description: Edit job status
 *     tags: [Applications]
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: jobId
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: id of job to edit
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                  description: status of application
 *                  example: cancel
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
 *                      example: Apply Canceled
 *       '400':
 *         $ref: '#/components/responses/InvalidInput'
 *       '401':
 *         $ref: '#/components/responses/InvalidToken'
 *       '403':
 *         $ref: '#/components/responses/PermissionDenied'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /apply/company/{jobId}:
 *   put:
 *     summary: Edit application status by job Id
 *     description: Edit job status
 *     tags: [Applications]
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: jobId
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: id of job to edit
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                  description: status of application
 *                  example: interview
 *                seekerId:
 *                  type: integer
 *                  description: id of jobseeker to update
 *                  example: 7
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
 *                      example: Apply Updated
 *       '400':
 *         $ref: '#/components/responses/InvalidInput'
 *       '401':
 *         $ref: '#/components/responses/InvalidToken'
 *       '403':
 *         $ref: '#/components/responses/PermissionDenied'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */
