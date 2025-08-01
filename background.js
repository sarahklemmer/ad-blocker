chrome.webNavigation.onCommitted.addListener((details) => {
  if (details.frameId !== 0) return; // Only main frame

  const url = new URL(details.url);
  const domain = url.hostname.replace('www.', '');

  if (domain === 'linkedin.com') {
    chrome.scripting.executeScript({
      target: { tabId: details.tabId },
      files: ['linkedin.js']
    });
  }
});
