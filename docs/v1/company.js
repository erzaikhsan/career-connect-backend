/**
 * @swagger
 * components:
 *  $ref: './components.js#/components'
 */

/**
 * @swagger
 * tags:
 *   name: Companies
 *   description: API operations related to company
 */

/**
 * @swagger
 * /companies:
 *   get:
 *     summary: Get all companies
 *     description: Retrieve a list of all companies
 *     tags: [Companies]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: keyword
 *         schema:
 *           type: string
 *         description: Search term for company names and location
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
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
 *                                example: 3
 *                              totalPages:
 *                                type: integer
 *                                example: 1

 *                      data:
 *                          example:
 *                                  - id: 2
 *                                    photo_profile: "photo/default/company.png"
 *                                    name: "TechCompany"
 *                                    type: "Technology"
 *                                    description: "This is our TechCompany"
 *                                    website: "www.techcompany.com"
 *                                    email: "techcompany@gmail.com"
 *                                    phone_number: "+62852123456789"
 *                                    address: "Jakarta, Wakanda"
 *                                    createdAt: "2023-11-16T16:23:00.902Z"
 *                                    updatedAt: "2023-11-16T16:23:00.902Z"
 *                                  - id: 4
 *                                    photo_profile: "photo/default/company.png"
 *                                    name: "HealthCare"
 *                                    type: "Healthcare"
 *                                    description: "This is our HealthCare Company"
 *                                    website: "www.healthcompany.com"
 *                                    email: "healthcompany@gmail.com"
 *                                    phone_number: "+62852123423789"
 *                                    address: "Surabaya, Wakanda"
 *                                    createdAt: "2023-11-16T16:23:00.902Z"
 *                                    updatedAt: "2023-11-16T16:23:00.902Z"
 *                                  - id: 6
 *                                    photo_profile: "photo/default/company.png"
 *                                    name: "MakinPaper"
 *                                    type: "Manufacturing"
 *                                    description: "This is our Making Paper Company"
 *                                    website: "www.papercompany.com"
 *                                    email: "papercompany@gmail.com"
 *                                    phone_number: "+62852124456789"
 *                                    address: "Bandung, Wakanda"
 *                                    createdAt: "2023-11-16T16:23:00.902Z"
 *                                    updatedAt: "2023-11-16T16:23:00.902Z"
 *       '400':
 *         $ref: '#/components/responses/InvalidInput'
 *       '405':
 *         $ref: '#/components/responses/MethodNotAllowed'
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /companies/{id}:
 *   get:
 *     summary: Get Company by id
 *     description: Getting company data by id
 *     tags: [Companies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: id of company to getting data company
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                  type: object
 *                  properties:
 *                      status:
 *                          example: Success
 *                      data:
 *                          type: object
 *                          properties:
 *                                  companies_id:
 *                                      type: integer
 *                                      example: 2
 *                                  email:
 *                                      type: string
 *                                      example: company0@company.com
 *                                  role:
 *                                      type: string
 *                                      example: company
 *                                  photo_profile:
 *                                      type: string
 *                                      example: "public/uploads/default/company.png"
 *                                  name:
 *                                      type: string
 *                                      example: "TechCompany"
 *                                  type:
 *                                      type: string
 *                                      example: "Technology"
 *                                  description:
 *                                      type: string
 *                                      example: "This is our TechCompany"
 *                                  website:
 *                                      type: string
 *                                      example: "www.techcompany.com"
 *                                  email_company:
 *                                      type: string
 *                                      example: "techcompany@gmail.com"
 *                                  phone_number:
 *                                      type: string
 *                                      example: "+62852123456789"
 *                                  address:
 *                                      type: string
 *                                      example: "Jakarta, Wakanda"
 *       '400':
 *          $ref: '#/components/responses/InvalidInput'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /companies:
 *   put:
 *     summary: Update company by id
 *     description: Updating company by id
 *     tags: [Companies]
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: company@mail.com
 *               password:
 *                 type: string
 *                 example: newpassword123
 *               name:
 *                 type: string
 *                 example: newNameTechComp
 *               type:
 *                 example: Technology
 *               email_company:
 *                 type: string
 *                 example: work@email.com
 *               website:
 *                 type: string
 *                 example: www.newwebiste.com
 *               phone_number:
 *                 type: string
 *                 example: 0856789012312
 *               address:
 *                 type: string
 *                 example: Surabaya, Wakanda
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
