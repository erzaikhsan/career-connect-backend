/**
 * @swagger
 * components:
 *  $ref: './components.js#/components'
 */

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: API operations related to Auth process
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login Process
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 example: user@gmail.com
 *               password:
 *                 example: password123
 *     responses:
 *       200:
 *         description: Successfully Login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   example: Successfully Login
 *                 token:
 *                   example: eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxMDEsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6IkFkbWluaXN0cmF0b3IifSwiaWF0IjoxNjk3Mjk1MjgwLCJleHAiOjE2OTczODE2ODB9.ZoURADZSJuyTjZid6mQA_jEj4zJw5prKsC1Ui-bslLNK6v5i5Y3TDKhuQOvo1VMYT-DLlkyTx_3cg-LaCYKoE4vSpK602N9sMz4z0vS7W5KvmXEGVrash9wTtn9VTW8qIfIwFC7_snjHmu2jWtkeQ8YVESMuOaL0wcA9Albvrp_ZaHAQinMSZHc66HSjMvubdMdY6u9GWA1YtEX6x7AOkv0PmJiMklUXUf1F3NCm6s7taWGnK_0ZeEd0514eAMRA0KYfH_ft15RnFlOqJa6wjPb1btS1kl64njoFnsywB3yWbHSdph521vGfJ6_n3sHnCfEyEyY9AT9ckCtLj_4AAg
 *       400:
 *         description: Invalid Input
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   example: failed
 *                 message:
 *                   example: Invalid Input
 *       401:
 *         description: Incorrect Email or Password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   example: failed
 *                 message:
 *                   example: Incorrect Email or Password
 *       405:
 *         $ref: '#/components/responses/MethodNotAllowed'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /auth/register/jobseeker:
 *   post:
 *     summary: Register as JobSeeker
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 example: user@gmail.com
 *               password:
 *                 example: password
 *               full_name:
 *                 example: User Nama Lengkap
 *               gender:
 *                 example: M
 *               phone_number:
 *                 type: string
 *                 example: '0852123456789'
 *               address:
 *                 example: Meikarta, Wakanda
 *               place_of_birth:
 *                 example: Pandeglang
 *               date_of_birth:
 *                 example: 2002-02-02
 *     responses:
 *       200:
 *         description: Successfully Register
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   example: Success
 *                 message:
 *                   example: Successfully Register
 *       400:
 *         $ref: '#/components/responses/InvalidInput'
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
 *                      example: Email already exist
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /auth/register/company:
 *   post:
 *     summary: Register as Company
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 example: tech@gmail.com
 *               password:
 *                 example: password312
 *               name:
 *                 example: Tech Comp
 *               type:
 *                 example: Technology
 *               address:
 *                 example: Jln. Cuma dibuat aja
 *               phone_number:
 *                 example: "0852826242323"
 *               website:
 *                 example: www.techlagi.com
 *               companyEmail:
 *                 example: techwork@gmail.com
 *     responses:
 *       200:
 *         description: Successfully Register
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   example: Success
 *                 message:
 *                   example: Successfully Register
 *       400:
 *         $ref: '#/components/responses/InvalidInput'
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
 *                      example: Email already exist
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */
