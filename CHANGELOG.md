# Changelog

All notable changes to this project will be documented in this file.

### reteam-now-APP {05/08/2025} 

# Functionality Added
- Login and Authentication (06/08/2025)
- Splash Screen (07/08/2025)


# Folders and File Workflow

- src/navigation  --> defines the navigation between AppStack and AuthStack ---> RootNavigator (will decide which side the user should see, i.e AppStack or AuthStack)

- src/ context  --> Global file, decides the login credentials , stores and removes tokens received from api response

- src/ screens --> Shows all the screens needed

- src/ services / authService.ts --> contains loginUser and registerUser api endpoints

# Changes 
- {06/08/2025}
- Added basic setup files 

- {07/08/2025} 
- Added splash screen with reteamnow Logo ---> refer assets folder and android/app/src/res/values for any specific change
- 