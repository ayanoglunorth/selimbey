# Dynamic companion discovery

Selimbey covers ordinary interface work. When the user names an available specialist skill or explicitly asks for its particular method or outcome, use that skill for the relevant part of the task, even if Selimbey could produce a general version. For example, a request for Taste's visual direction calls for the available Taste skill, not an imitation based on Selimbey's craft reference.

Use the live capability catalog provided by the current host as the source of truth. Match the user's named skill or requested method to an available capability and read its complete `SKILL.md` before acting. Follow its applicable workflow and references; a mention or a summary does not count as using it. Do not assume a particular skill name, file path, version, plugin, or router exists on another machine.

Possible specialist outcomes include:

- reproducing an interface from a supplied screenshot or visual reference;
- generating web or mobile design concepts as images;
- implementing complex, coordinated motion beyond the current stack’s simple transitions;
- creating a brand identity, logo, or other brand system material;
- producing a presentation deck; and
- running a formal UI guideline or accessibility audit.

For an unnamed specialist need, choose the narrowest compatible capability. Keep Selimbey for interface integration and the specialist for its requested contribution; avoid duplicating their overlapping guidance. Add motion, accessibility, or performance guidance only when the task needs it. If the user named a skill that is unavailable, say so rather than silently substituting another. For an unnamed need with no suitable companion, continue with Selimbey and state the limitation only when it affects the requested result.

Companion discovery does not install skills, inspect private folders, change tool permissions, or authorize external actions.
