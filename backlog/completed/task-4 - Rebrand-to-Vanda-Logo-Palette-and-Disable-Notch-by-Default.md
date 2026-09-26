---
id: TASK-4
title: 'Rebrand to Vanda Logo, Palette, and Disable Notch by Default'
status: Done
assignee: []
created_date: '2026-09-26 12:44'
updated_date: '2026-09-26 12:48'
labels: []
dependencies: []
priority: medium
ordinal: 1000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Update mobile app branding to Vanda using the provided logo image, adjust primary color tokens to the warm amber-gold palette (#e39d3d), and turn off the simulated notch/status bar by default so Android and mobile browsers render smoothly without awkward double notches.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 App name is changed to Vanda and Vanda logo is rendered in the header and assets
- [x] #2 Color palette matches the Vanda logo gold/amber (#e39d3d) with harmonious accents and borders
- [x] #3 Simulated notch/dynamic island is disabled by default and suppressed on mobile/Android browsers
- [x] #4 Build and tests pass cleanly
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Rebranded mobile demo to Vanda. Copied docs/logo.png to mobile_demo/public/logo.png and rendered it in Header.jsx. Extracted dominant brand color #e39d3d (warm amber gold) and updated CSS variables (--primary, --primary-hover, --primary-deep, --primary-light, --primary-border, --warning). Set showNotch to false by default in App.jsx and added display: none !important for phone-status-bar and phone-dynamic-island on mobile viewports.
<!-- SECTION:NOTES:END -->

## Final Summary

<!-- SECTION:FINAL_SUMMARY:BEGIN -->
Rebranded application to Vanda with logo image and amber-gold palette (#e39d3d). Disabled simulated notch and fake status bar by default, eliminating awkward double notch behavior on Android and mobile browsers. Validated with clean mobile build.
<!-- SECTION:FINAL_SUMMARY:END -->
