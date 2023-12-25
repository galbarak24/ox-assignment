import { test } from "@playwright/test"
import { LoginPage } from "../page-object/LoginPage.js"
import { DashboardPage } from "./../page-object/DashboardPage.js";




test("Ui test assignment ", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.visit();
    await loginPage.moveToLogin();
    await loginPage.signIn()


    const dashboardPage = new DashboardPage(page)
    await dashboardPage.issuesSection()
    await dashboardPage.severitySection()
    await dashboardPage.getSevrityIssuesCount()
})