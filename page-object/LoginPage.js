

export class LoginPage {
    constructor(page) {
        this.page = page;

        this.moveToLoginButton = page.getByRole('button', { name: 'Login' })
        this.userName = page.getByLabel('Username or work email address')
        this.continueButton = page.getByRole('button', { name: 'Continue', exact: true })
        this.passwordButton = page.getByLabel('Password')

    }

    visit = async () => {
        await this.page.goto('/')
    }

    moveToLogin = async () => {
        await this.moveToLoginButton.click()
        this.page.waitForURL(/u\/login\//, { timeout: 3000 })

    }

    signIn = async () => {
        const user = "test"
        const password = "Aa123456"

        await this.userName.waitFor()
        await this.userName.fill(user)
        await this.continueButton.waitFor()
        await this.continueButton.click()
        await this.passwordButton.waitFor()
        await this.passwordButton.fill(password)
        await this.continueButton.waitFor()
        await this.continueButton.click()
        this.page.waitForURL(/\/dashboard/)




    }
}