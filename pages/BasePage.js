export class BasePage {
    // Store the Playwright Page instance for all page actions.
    constructor(page) {
        this.page = page;
    }

    // Convert a selector string into a Playwright locator while preserving existing locators.
    getLocator(locator) {
        return typeof locator === 'string' ? this.page.locator(locator) : locator;
    }

    // Navigate to a URL.
    async navigateToUrl(url, options) {
        const response = await this.page.goto(url, options);
        console.log(`Navigated to URL: ${url}`);
        return response;
    }

    // Navigate using a shorter method name.
    async navigateTo(url, options) {
        return await this.navigateToUrl(url, options);
    }

    // Reload the current page.
    async reload(options) {
        const response = await this.page.reload(options);
        console.log('Page reloaded');
        return response;
    }

    // Navigate to the previous page in browser history.
    async goBack(options) {
        const response = await this.page.goBack(options);
        console.log('Navigated back in browser history');
        return response;
    }

    // Navigate forward in browser history.
    async goForward(options) {
        const response = await this.page.goForward(options);
        console.log('Navigated forward in browser history');
        return response;
    }

    // Wait for the page or a resource to reach a load state.
    async waitForLoadState(state, options) {
        await this.page.waitForLoadState(state, options);
        console.log(`Page reached load state: ${state}`);
    }

    // Click an element identified by a selector or existing locator.
    async click(locator, options) {
        await this.getLocator(locator).click(options);
        console.log(`Locator ${locator} was clicked`);
    }

    // Alias for click.
    async clickElement(locator, options) {
        await this.click(locator, options);
    }

    // Double-click an element.
    async doubleClick(locator, options) {
        await this.getLocator(locator).dblclick(options);
        console.log(`Locator ${locator} was double-clicked`);
    }

    // Right-click an element.
    async rightClick(locator, options) {
        await this.getLocator(locator).click({ ...options, button: 'right' });
        console.log(`Locator ${locator} was right-clicked`);
    }

    // Tap an element on a touch-enabled device.
    async tap(locator, options) {
        await this.getLocator(locator).tap(options);
        console.log(`Locator ${locator} was tapped`);
    }

    // Fill an input or textarea with text.
    async fill(locator, value, options) {
        await this.getLocator(locator).fill(value, options);
        console.log(`Text "${value}" was filled in locator ${locator}`);
    }

    // Alias for fill.
    async fillText(locator, text, options) {
        await this.fill(locator, text, options);
    }

    // Clear an input or textarea.
    async clear(locator) {
        await this.getLocator(locator).clear();
        console.log(`Locator ${locator} was cleared`);
    }

    // Type text one character at a time.
    async typeText(locator, text, options) {
        await this.getLocator(locator).pressSequentially(text, options);
        console.log(`Text "${text}" was typed in locator ${locator}`);
    }

    // Press a keyboard key on an element.
    async press(locator, key, options) {
        await this.getLocator(locator).press(key, options);
        console.log(`Key "${key}" was pressed on locator ${locator}`);
    }

    // Upload one or more files to a file input.
    async setInputFiles(locator, files, options) {
        await this.getLocator(locator).setInputFiles(files, options);
        console.log(`Files were uploaded using locator ${locator}`);
    }

    // Select an option by value, label, or index.
    async selectOption(locator, values, options) {
        const selected = await this.getLocator(locator).selectOption(values, options);
        console.log(`Option was selected in locator ${locator}`);
        return selected;
    }

    // Check a checkbox or radio button.
    async check(locator, options) {
        await this.getLocator(locator).check(options);
        console.log(`Locator ${locator} was checked`);
    }

    // Uncheck a checkbox.
    async uncheck(locator, options) {
        await this.getLocator(locator).uncheck(options);
        console.log(`Locator ${locator} was unchecked`);
    }

    // Set checkbox or radio button state.
    async setChecked(locator, checked, options) {
        await this.getLocator(locator).setChecked(checked, options);
        console.log(`Locator ${locator} was set to checked=${checked}`);
    }

    // Hover over an element.
    async hover(locator, options) {
        await this.getLocator(locator).hover(options);
        console.log(`Hovered over locator ${locator}`);
    }

    // Focus an element.
    async focus(locator) {
        await this.getLocator(locator).focus();
        console.log(`Locator ${locator} was focused`);
    }

    // Blur an element.
    async blur(locator) {
        await this.getLocator(locator).blur();
        console.log(`Locator ${locator} was blurred`);
    }

    // Drag a source element onto a target element.
    async dragTo(sourceLocator, targetLocator, options) {
        await this.getLocator(sourceLocator).dragTo(this.getLocator(targetLocator), options);
        console.log(`Locator ${sourceLocator} was dragged to locator ${targetLocator}`);
    }

    // Scroll an element into the viewport.
    async scrollIntoView(locator, timeout) {
        await this.getLocator(locator).scrollIntoViewIfNeeded({ timeout });
        console.log(`Locator ${locator} was scrolled into view`);
    }

    // Get an element's visible text.
    async getText(locator) {
        const text = await this.getLocator(locator).textContent();
        console.log(`Text retrieved from locator ${locator}: ${text}`);
        return text;
    }

    // Alias for getText.
    async getTextByLocator(locator) {
        return await this.getText(locator);
    }

    // Get an element's inner text.
    async getInnerText(locator) {
        const text = await this.getLocator(locator).innerText();
        console.log(`Inner text retrieved from locator ${locator}: ${text}`);
        return text;
    }

    // Get text content from every matching element.
    async getAllTextContents(locator) {
        const texts = await this.getLocator(locator).allTextContents();
        console.log(`Text contents retrieved from locator ${locator}: ${JSON.stringify(texts)}`);
        return texts;
    }

    // Get an HTML attribute value.
    async getAttribute(locator, name) {
        const value = await this.getLocator(locator).getAttribute(name);
        console.log(`Attribute "${name}" retrieved from locator ${locator}: ${value}`);
        return value;
    }

    // Get an input or textarea value.
    async getInputValue(locator) {
        const value = await this.getLocator(locator).inputValue();
        console.log(`Input value retrieved from locator ${locator}: ${value}`);
        return value;
    }

    // Check whether an element is visible.
    async isVisible(locator) {
        const visible = await this.getLocator(locator).isVisible();
        console.log(`Visibility for locator ${locator}: ${visible}`);
        return visible;
    }

    // Alias for isVisible.
    async isElementVisible(locator) {
        return await this.isVisible(locator);
    }

    // Check whether an element is enabled.
    async isEnabled(locator) {
        const enabled = await this.getLocator(locator).isEnabled();
        console.log(`Enabled state for locator ${locator}: ${enabled}`);
        return enabled;
    }

    // Check whether an element is disabled.
    async isDisabled(locator) {
        const disabled = await this.getLocator(locator).isDisabled();
        console.log(`Disabled state for locator ${locator}: ${disabled}`);
        return disabled;
    }

    // Check whether a checkbox or radio button is checked.
    async isChecked(locator) {
        const checked = await this.getLocator(locator).isChecked();
        console.log(`Checked state for locator ${locator}: ${checked}`);
        return checked;
    }

    // Get the number of matching elements.
    async getCount(locator) {
        const count = await this.getLocator(locator).count();
        console.log(`Element count for locator ${locator}: ${count}`);
        return count;
    }

    // Get the nth matching element, starting at zero.
    getNthLocator(locator, index) {
        const nthLocator = this.getLocator(locator).nth(index);
        console.log(`Nth locator retrieved: index ${index} for locator ${locator}`);
        return nthLocator;
    }

    // Wait for an element to become visible.
    async waitForVisible(locator, options) {
        await this.getLocator(locator).waitFor({ ...options, state: 'visible' });
        console.log(`Locator ${locator} became visible`);
    }

    // Alias for waitForVisible.
    async waitForElementVisible(locator, options) {
        await this.waitForVisible(locator, options);
    }

    // Wait for an element to become hidden.
    async waitForHidden(locator, options) {
        await this.getLocator(locator).waitFor({ ...options, state: 'hidden' });
        console.log(`Locator ${locator} became hidden`);
    }

    // Alias for waitForHidden.
    async waitForElementHidden(locator, options) {
        await this.waitForHidden(locator, options);
    }

    // Wait for an element to be attached to the DOM.
    async waitForAttached(locator, options) {
        await this.getLocator(locator).waitFor({ ...options, state: 'attached' });
        console.log(`Locator ${locator} became attached`);
    }

    // Wait for an element to be detached from the DOM.
    async waitForDetached(locator, options) {
        await this.getLocator(locator).waitFor({ ...options, state: 'detached' });
        console.log(`Locator ${locator} became detached`);
    }

    // Wait for a fixed amount of time.
    async waitForTimeout(timeout) {
        await this.page.waitForTimeout(timeout);
        console.log(`Waited for ${timeout} milliseconds`);
    }

    // Get the current page title.
    async getPageTitle() {
        const title = await this.page.title();
        console.log(`Page title retrieved: ${title}`);
        return title;
    }

    // Get the current page URL.
    async getPageUrl() {
        const url = await this.page.url();
        console.log(`Page URL retrieved: ${url}`);
        return url;
    }

    // Take a screenshot of the page.
    async takeScreenshot(options) {
        const screenshot = await this.page.screenshot(options);
        console.log('Page screenshot was taken');
        return screenshot;
    }

    // Take a screenshot of one element.
    async takeElementScreenshot(locator, options) {
        const screenshot = await this.getLocator(locator).screenshot(options);
        console.log(`Screenshot was taken for locator ${locator}`);
        return screenshot;
    }

    // Get the text of the first h1 header.
    async getPageHeaderText() {
        const text = await this.page.locator('h1').textContent();
        console.log(`Page header text retrieved: ${text}`);
        return text;
    }

    // Get the first h1 locator.
    getPageHeaderLocator() {
        const locator = this.page.locator('h1');
        console.log('Page header locator was retrieved');
        return locator;
    }

    // Get the number of h1 elements.
    async getPageHeaderCount() {
        const count = await this.page.locator('h1').count();
        console.log(`Page header count: ${count}`);
        return count;
    }

    // Get text through a custom locator.
    async getPageHeaderTextByLocator(locator) {
        const text = await this.getLocator(locator).textContent();
        console.log(`Text retrieved from custom locator ${locator}: ${text}`);
        return text;
    }

    // Get element count through a custom locator.
    async getPageHeaderCountByLocator(locator) {
        const count = await this.getLocator(locator).count();
        console.log(`Element count retrieved from custom locator ${locator}: ${count}`);
        return count;
    }
}