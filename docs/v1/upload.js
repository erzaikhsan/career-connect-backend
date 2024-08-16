/**
 * @swagger
 * components:
 *  $ref: './components.js#/components'
 */

/**
 * @swagger
 * tags:
 *   name: Files
 *   description: API operations related to any files upload, edit or delete if needed
 */

/**
 * @swagger
 * /photo:
 *  put:
 *    summary: Update the photo profile of any user
 *    description: Update photo by user id
 *    tags: [Files]
 *    security:
 *       - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
 *              file:
 *                type: string
 *                format: binary
 *            required:
 *              - file
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
 *                  example: Photo Uploaded successfully
 *      400:
 *       description: Invalid input provided
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                  example: failed
 *               message:
 *                  example: No file uploaded or file type is incorrect
 *      401:
 *         $ref: '#/components/responses/InvalidToken'
 *      403:
 *         $ref: '#/components/responses/PermissionDenied'
 *      500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /jobseekers/profile/cv:
 *  put:
 *    summary: Update the CV profile
 *    description: Update CV
 *    tags: [Files]
 *    security:
 *       - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
 *              file:
 *                type: string
 *                format: binary
 *            required:
 *              - file
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
 *                  example: CV Uploaded successfully
 *      400:
 *       description: Invalid input provided
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                  example: failed
 *               message:
 *                  example: No file uploaded or file type is incorrect
 *      401:
 *         $ref: '#/components/responses/InvalidToken'
 *      403:
 *         $ref: '#/components/responses/PermissionDenied'
 *      500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /jobseekers/certificates:
 *  post:
 *    summary: Upload the certificate of JobSeekers
 *    description: Upload Certificate
 *    tags: [Files]
 *    security:
 *       - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Sertifikat baru
 *              file:
 *                type: string
 *                format: binary
 *            required:
 *              - file
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
 *                  example: Certificates uploaded successfully
 *      401:
 *         $ref: '#/components/responses/InvalidToken'
 *      404:
 *         $ref: '#/components/responses/NotFound'
 *      500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /jobseekers/certificates/{id}:
 *  delete:
 *    summary: Delete the certificate of JobSeekers by Certificate id
 *    description: Delete Certificate by Certificate id
 *    tags: [Files]
 *    security:
 *       - bearerAuth: []
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: id of certificate to delete
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
 *                  example: Certificates deleted successfully
 *      401:
 *         $ref: '#/components/responses/InvalidToken'
 *      403:
 *         $ref: '#/components/responses/PermissionDenied'
 *      404:
 *         $ref: '#/components/responses/NotFound'
 *      500:
 *         $ref: '#/components/responses/InternalServerError'
 */
