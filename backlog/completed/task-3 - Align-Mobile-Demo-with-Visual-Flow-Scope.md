---
id: TASK-3
title: Align Mobile Demo with Visual Flow Scope
status: Done
assignee: []
created_date: '2026-09-26 12:28'
updated_date: '2026-09-26 12:35'
labels: []
dependencies: []
priority: high
ordinal: 1000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Analyse docs/visual flow.png and update the mobile demo to strictly reflect the 7-step Customer Mobile App Flow (Browse & Select, Checkout, Make Payment, Order Confirmed, View Estimated Arrival Date, Order In Delivery, Order Completed) and Delivery Flow notes. Remove out-of-scope modules like profile/loyalty/concierge and redundant categories tab, streamline checkout (address, payment method [Online vs COD], discount voucher; remove courier selection), and introduce Order Confirmation and accurate order lifecycle states.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 Customer Mobile App Flow accurately implements all 7 steps from docs/visual flow.png
- [x] #2 Out-of-scope modules (Profile, loyalty tiers, wallet balance, support concierge, categories tab) are removed from the mobile demo navigation and views
- [x] #3 Checkout flow strictly reflects Step 2 & 3: address selection, discount voucher application, payment method selection (Online or Cash on Delivery (COD)), removing customer courier tier selection
- [x] #4 Order placement shows Step 4: Order Confirmed screen with shop processing status
- [x] #5 Order timeline and tracking modal accurately reflect the 7-step flow and Note that delivery date is provided by the shop and customer only sees estimated arrival date
- [x] #6 Mobile demo builds and runs cleanly without broken imports or errors
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Analyzed docs/visual flow.png. Removed out-of-scope ProfileView, CategoriesView, chat concierge, and courier tier selection from checkout. Added OrderConfirmedModal for Step 4. Aligned dummy orders, bottom navigation, and tracking modal with the 7-step Customer Mobile App Flow and Delivery Flow rules.
<!-- SECTION:NOTES:END -->

## Final Summary

<!-- SECTION:FINAL_SUMMARY:BEGIN -->
Aligned mobile demo with Customer Mobile App Flow from docs/visual flow.png. Reduced bottom navigation to Browse, Cart, and My Orders. Updated Checkout to address, discount, and Online/COD payment. Added Step 4 Order Confirmed modal and 7-step tracking timeline with Delivery Flow notes. Verified clean build with npm run mobile:build.
<!-- SECTION:FINAL_SUMMARY:END -->
