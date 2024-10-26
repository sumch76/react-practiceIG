## added more  functionality
 
 ### 1. Edit Mode (Toggle Editing of a Person's Name)

- **Purpose:** Allows the user to click on a person’s name to enter "edit mode," where they can modify the name directly in an input field.

- **How It Works:**
- Each person has an `isEditing` property that tracks if they are in edit mode.
- If isEditing is true, an <input> field appears, allowing the name to be edited.
- When the user clicks outside the input field (on onBlur) or presses Enter (on onKeyDown), the `saveName`function is called to save the new name, update `isEditing` to `false`, and switch back to "view mode."