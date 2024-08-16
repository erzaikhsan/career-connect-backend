/**
 * @swagger
 * components:
 *  $ref: './components.js#/components'
 */

/**
 * @swagger
 * tags:
 *   name: JobSeekers
 *   description: API operations related to user as jobseeker
 */

/**
 * @swagger
 * /jobseekers/{id}:
 *   get:
 *     summary: Get data profile and certificate by user id
 *     description: Getting data by user id
 *     tags: [JobSeekers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: id of user to getting data profile
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
 *                          dataProfile:
 *                              $ref: '#/components/schemas/jobseeker'
 *                          certificate:
 *                              example:
 *                                  - id: 1
 *                                    name: Certificate for me
 *                                    path: public/uploads/1/certificate1.pdf
 *                                  - id: 2
 *                                    name: Certificate for me again
 *                                    path: public/uploads/1/certificate2.pdf
 *
 *       400:
 *          $ref: '#/components/responses/InvalidInput'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /jobseekers:
 *   put:
 *     summary: Update data by user Id
 *     description: Update data by user id
 *     tags: [JobSeekers]
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    email:
 *                      type: string
 *                      description: User email
 *                      example: jobseeker0@gmail.com
 *                    password:
 *                      type: string
 *                      description: User new password
 *                      example: newpassword123
 *                    full_name:
 *                      type: string
 *                      description: User's full name
 *                      example: John Doe
 *                    bio:
 *                      type: string
 *                      description: Bio of the user as a job seeker
 *                      example: Bio of me as Job Seeker
 *                    gender:
 *                      type: string
 *                      description: User's gender
 *                      example: M
 *                    phone_number:
 *                      type: string
 *                      description: User's phone number
 *                      example: +6281312345565
 *                    address:
 *                      type: string
 *                      description: User's address
 *                      example: Jln. Abal-abal, Jakarta, Wakanda
 *                    place_of_birth:
 *                      type: string
 *                      nullable: true
 *                      description: User's place of birth
 *                      example: null
 *                    date_of_birth:
 *                      type: string
 *                      format: date-time
 *                      description: User's date of birth
 *                      example: 2000-07-11T16:00:00.000Z
 *                    on_work:
 *                      type: boolean
 *                      description: Indicates if the user is currently on work
 *                      example: false
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
 *                      example: Data Profile successfully updated
 *
 *       400:
 *          $ref: '#/components/responses/InvalidInput'
 *       401:
 *         $ref: '#/components/responses/InvalidToken'
 *       403:
 *         $ref: '#/components/responses/PermissionDenied'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /jobseekers/profile/cv:
 *  delete:
 *    summary: Delete the CV profile
 *    description: Delete CV
 *    tags: [JobSeekers]
 *    security:
 *       - bearerAuth: []
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  example: Success
 *                message:
 *                  example: CV deleted successfully
 *      401:
 *         $ref: '#/components/responses/InvalidToken'
 *      403:
 *         $ref: '#/components/responses/PermissionDenied'
 *      500:
 *         $ref: '#/components/responses/InternalServerError'
 */
