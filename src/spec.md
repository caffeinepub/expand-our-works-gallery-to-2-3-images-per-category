# Specification

## Summary
**Goal:** Update the WhatsApp/phone number from 6374350379 to 6374942194 everywhere it appears in the frontend.

**Planned changes:**
- Replace the PhoneNumberSelector entry that uses +916374350379 / “+91 6374 350 379” to +916374942194 / “+91 6374 942 194” (with consistent formatting), ensuring its associated tel:/wa.me link uses the new number.
- Update the Contact section’s second `tel:` link from `tel:+916374350379` to `tel:+916374942194` and ensure the displayed text matches.
- Verify no remaining occurrences of `6374350379` exist in frontend source files.

**User-visible outcome:** All phone/WhatsApp contact links and displayed contact text now reference 6374942194 (with country code +91) and open the correct dialing/WhatsApp destination.
