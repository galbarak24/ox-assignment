
export class DashboardPage {
    constructor(page) {
        this.page = page

        this.issueTab = page.getByRole('button', { name: 'Issues', exact: true })
        this.activeIssue = page.getByRole('button', { name: 'Active Issues' })
        this.severityTab = page.getByRole('button', { name: 'Severity' }).first()
        this.severityHig = page.getByTestId('filter-form').getByLabel('High').locator('#criticality')
        this.numberActivIssues = page.locator('span.css-2dl6fu-count');



    }

    issuesSection = async () => {
        await this.issueTab.waitFor()
        await this.issueTab.click()
        await this.activeIssue.waitFor()
        await this.activeIssue.click()
        this.page.waitForURL(/\/issues/, { timeout: 3000 });



    }

    severitySection = async () => {
        await this.severityTab.click()
        await this.severityHig.waitFor()
        await this.severityHig.click()



    }

    getSevrityIssuesCount = async () => {
        await this.numberActivIssues.waitFor()
        const issuesCount = await this.numberActivIssues.innerText()

        console.log('Number of Active Issues:', issuesCount);
        return issuesCount



    }


}

