# Changelog

All notable changes to this project will be documented in this file.

### reteam-now-APP {05/08/2025} 

# Functionality Added
- Login and Authentication 

# Folders and File Workflow

- src/navigation  --> defines the navigation between AppStack and AuthStack ---> RootNavigator (will decide which side the user should see, i.e AppStack or AuthStack)

- src/ context  --> Global file, decides the login credentials , stores and removes tokens received from api response

- src/ screens --> Shows all the screens needed

- src/ services / authService.ts --> contains loginUser and registerUser api endpoints

# Changes 
- Added basic setup files 