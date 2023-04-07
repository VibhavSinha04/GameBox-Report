function changeImageAndButtons(buttonPressed) {
    var imageMario = document.getElementById("mario");
    var imageFlappy = document.getElementById("flappy");
    var imageDino = document.getElementById("dino");

    var buttonContainer = document.getElementById("button-container1");
    var buttonContainer2 = document.getElementById("button-container2");
    var buttonContainer3 = document.getElementById("button-container3");

    var textContainer = document.getElementById("text-container1");
    var textContainer2 = document.getElementById("text-container2");
    var textContainer3 = document.getElementById("text-container3");

    if (buttonPressed === 'new1') {
        imageMario.src = "./maps/mario/mario_new1.png";
        textContainer.innerHTML = '<p>On selecting the New Game Button the Overworld screen will open. Where the user can use the Right Left arrow keys to<br>move between different unlocked levels. On pressing the Space button the user will be taken into the game after a timer<br>to let the user prepare. </p>';
        buttonContainer.innerHTML = '<button id="spaceButton" onclick="changeImageAndButtons(\'space1\')">Space</button> <button id="backButton" onclick="resetImageAndButtons()">Back</button>';
    } else if (buttonPressed === 'help1') {
        imageMario.src = "./maps/mario/mario_help1.png";
        buttonContainer.innerHTML = '<button id="aboutButton" onclick="changeImageAndButtons(\'about1\')">About Game</button> <button id="howToPlayButton" onclick="changeImageAndButtons(\'htp1\')">How to Play</button> <button id="backButton" onclick="resetImageAndButtons()">Back</button>';
        textContainer.innerHTML = '<p>From the Main Menu Screen if the user selects "Help" button then the user will be redirected to the Help Page<br>The Help page will have About the game open from default.</p>';
    } else if (buttonPressed === 'space1'){
        imageMario.src = "./maps/mario/mario_light.png"
        textContainer.innerHTML = '<p>This is the game screen where the user plays the game. The user can open the "Settings" menu by clicking on the "gear" icon on the top-right of the screen or by pressing "Esc" on the keyboard.</p>';
        buttonContainer.innerHTML = '<button id="settingsButton" onclick="changeImageAndButtons(\'settings1\')">Esc / Settings</button>';
    } else if (buttonPressed === 'about1') {
        imageMario.src = "./maps/mario/mario_help1.png";
        textContainer.innerHTML = '<p>From the Main Menu Screen if the user selects "Help" button then the user will be redirected to the Help Page<br>The Help page will have About the game open from default.</p>';
        buttonContainer.innerHTML = '<button id="aboutButton" onclick="changeImageAndButtons(\'about1\')">About Game</button> <button id="howToPlayButton" onclick="changeImageAndButtons(\'htp1\')">How to Play</button> <button id="backButton" onclick="resetImageAndButtons()">Back</button>';
    } else if (buttonPressed === 'htp1') {
        imageMario.src = "./maps/mario/mario_help2.png";
        textContainer.innerHTML = '<p>The User will have the option to select How To Play Button and will be now displayed with the information on Hand Gestures<br>deployed in this game. The user can select the About Game Button to read about the game from this screen again.<br>The back button will take the user back to the Main Menu of the game.</p>';
        buttonContainer.innerHTML = '<button id="aboutButton" onclick="changeImageAndButtons(\'about1\')">About Game</button> <button id="howToPlayButton" onclick="changeImageAndButtons(\'htp1\')">How to Play</button> <button id="backButton" onclick="resetImageAndButtons()">Back</button>';
    } else if (buttonPressed === 'settings1'){
        imageMario.src = "./maps/mario/mario_light_settings.png"
        textContainer.innerHTML = '<p>On pressing the gear icon(Settings Menu) while playing the game. The game will pause and the Settings menu will be shown<br> to the user. The menu will have "Themes", "Help" and "Exit" buttons. </p>';
        buttonContainer.innerHTML = '<button id="crossButton" onclick="changeImageAndButtons(\'cross1\')">X</button> <button id="themesButton" onclick="changeImageAndButtons(\'themes1\')">Themes</button> <button id="howToPlayButton" onclick="changeImageAndButtons(\'htpIg1\')">Help</button> <button id="exitButton" onclick="changeImageAndButtons(\'exit1\')">Exit</button>';
    } else if (buttonPressed === 'cross1'){
        imageMario.src = "./maps/mario/mario_light.png"
        textContainer.innerHTML = '<p>This is the game screen where the user plays the game. The user can open the "Settings" menu by clicking on the "gear" icon on the top-right of the screen or by pressing "Esc" on the keyboard.</p>';
        buttonContainer.innerHTML = '<button id="settingsButton" onclick="changeImageAndButtons(\'settings1\')">Esc / Settings</button>';
    } else if (buttonPressed === 'themes1'){
        imageMario.src = "./maps/mario/mario_themes_lightbg.png"
        textContainer.innerHTML = '<p>On selecting the Themes button from the Settings option the User will have Light and Dark Theme Settings choices. <br>The "Back" button will take the User back to the game. </p>';
        buttonContainer.innerHTML = '<button id="settingsButton" onclick="changeImageAndButtons(\'light1\')">Light</button> <button id="settingsButton" onclick="changeImageAndButtons(\'dark1\')">Dark</button> <button id="settingsButton" onclick="changeImageAndButtons(\'back1\')">Back</button>';
    } else if (buttonPressed === 'htpIg1'){
        imageMario.src = "./maps/mario/mario_htp_ig.png"
        textContainer.innerHTML = '<p>On pressing the Help button the User can again go through the controls of the game and will not have to go to the main menu<br> to read the controls. The "Back" button will take the User back to the game. </p>';
        buttonContainer.innerHTML = '<button id="settingsButton" onclick="changeImageAndButtons(\'back1\')">Back</button>';
    } else if (buttonPressed === 'exit1'){
        imageMario.src = "./maps/mario/mario_exit.png"
        textContainer.innerHTML = '<p>On pressing the Exit button the user will be given a prompt to reconsider their choice if he presses "Yes" the user<br>will be redirected to the main menu. If he presses "NO" he will be taken to the settings menu. </p>';
        buttonContainer.innerHTML = '<button id="settingsButton" onclick="changeImageAndButtons(\'yes1\')">Yes</button> <button id="settingsButton" onclick="changeImageAndButtons(\'back1\')">No</button>';
    } else if (buttonPressed === 'light1') {
        imageMario.src = "./maps/mario/mario_light.png"
        textContainer.innerHTML = '<p>This is the game screen where the user plays the game. The user can open the "Settings" menu by clicking on the "gear" icon on the top-right of the screen or by pressing "Esc" on the keyboard.</p>';
        buttonContainer.innerHTML = '<button id="settingsButton" onclick="changeImageAndButtons(\'settings1\')">Esc / Settings</button>';
    } else if (buttonPressed === 'dark1') {
        imageMario.src = "./maps/mario/mario_dark.png"
        textContainer.innerHTML = '<p>This is the game screen where the user plays the game. The user can open the "Settings" menu by clicking on the "gear" icon on the top-right of the screen or by pressing "Esc" on the keyboard.</p>';
        buttonContainer.innerHTML = '<button id="settingsButton" onclick="changeImageAndButtons(\'settings1\')">Esc / Settings</button>';
    } else if (buttonPressed === 'back1') {
        imageMario.src = "./maps/mario/mario_light_settings.png"
        textContainer.innerHTML = '<p>On pressing the gear icon(Settings Menu) while playing the game. The game will pause and the Settings menu will be shown<br> to the user. The menu will have "Themes", "Help" and "Exit" buttons. </p>';
        buttonContainer.innerHTML = '<button id="crossButton" onclick="changeImageAndButtons(\'cross1\')">X</button> <button id="themesButton" onclick="changeImageAndButtons(\'themes1\')">Themes</button> <button id="howToPlayButton" onclick="changeImageAndButtons(\'htpIg1\')">Help</button> <button id="exitButton" onclick="changeImageAndButtons(\'exit1\')">Exit</button>';
    } else if (buttonPressed === 'yes1') {
        imageMario.src = "./maps/mario/mario1.png"
        textContainer.innerHTML = '<p>This will be the landing page for the user if they select the "Play" button under the Super Mario Logo on the GameBox Screen.<br>The user will see three buttons on the Screen "New Game", "Help" and "Exit".<br>On selecting the "Exit" the user will be redirected to the GameBox Screen.</p>';
        buttonContainer.innerHTML = '<button id="newGameButton" onclick="changeImageAndButtons(\'new1\')">New Game</button> <button id="helpButton" onclick="changeImageAndButtons(\'help1\')">Help</button>';
    }

    if (buttonPressed === 'new2') {
        imageFlappy.src = "./maps/flappy/flappy_diff.png"
        textContainer2.innerHTML = '<p>On selecting the New Game Button the Select Difficulty screen will open. Where the user can select the difficulty of the game<br>The difficulties are "Easy", "Medium" and "Hard". After selecting the difficulty the user will be<br> given a timer of 5 seconds to prepare and then the game will start. </p>';
        buttonContainer2.innerHTML = '<button id="crossButton" onclick="changeImageAndButtons(\'cross2\')">X</button> <button id="themesButton" onclick="changeImageAndButtons(\'easy2\')">Easy</button> <button id="howToPlayButton" onclick="changeImageAndButtons(\'easy2\')">Medium</button> <button id="exitButton" onclick="changeImageAndButtons(\'easy2\')">Hard</button>';
    } else if (buttonPressed === 'help2') {
        imageFlappy.src = "./maps/flappy/flappy_help1.png";
        textContainer2.innerHTML = '<p>From the Main Menu Screen if the user selects "Help" button then the user will be redirected to the Help Page<br>The Help page will have About the game open from default. </p>';
        buttonContainer2.innerHTML = '<button id="aboutButton" onclick="changeImageAndButtons(\'about2\')">About Game</button> <button id="howToPlayButton" onclick="changeImageAndButtons(\'htp2\')">How to Play</button> <button id="backButton" onclick="resetImageAndButtons()">Back</button>';
    } else if (buttonPressed === 'about2') {
        imageFlappy.src = "./maps/flappy/flappy_help1.png";
        textContainer2.innerHTML = '<p>From the Main Menu Screen if the user selects "Help" button then the user will be redirected to the Help Page<br>The Help page will have About the game open from default. </p>';
        buttonContainer2.innerHTML = '<button id="aboutButton" onclick="changeImageAndButtons(\'about2\')">About Game</button> <button id="howToPlayButton" onclick="changeImageAndButtons(\'htp2\')">How to Play</button> <button id="backButton" onclick="resetImageAndButtons()">Back</button>';
    } else if (buttonPressed === 'htp2') {
        imageFlappy.src = "./maps/flappy/flappy_help2.png";
        textContainer2.innerHTML = '<p>The User will have the option to select How To Play Button and will be now displayed with the information on Hand Gestures<br>deployed in this game. The user can select the About Game Button to read about the game from this screen again.<br> The back button will take the user back to the Main Menu of the game.</p>';
        buttonContainer2.innerHTML = '<button id="aboutButton" onclick="changeImageAndButtons(\'about2\')">About Game</button> <button id="howToPlayButton" onclick="changeImageAndButtons(\'htp2\')">How to Play</button> <button id="backButton" onclick="resetImageAndButtons()">Back</button>';
    } else if (buttonPressed === 'cross2'){
        imageFlappy.src = "./maps/flappy/flappy1.png"
        textContainer2.innerHTML = '<p>This will be the landing page for the user if they select the "Play" button under the Chrome Dino Logo on the GameBox Screen.<br>The user will see three buttons on the Screen "New Game", "Help" and "Exit".<br>On selecting the "Exit" the user will be redirected to the GameBox Screen.</p>';
        buttonContainer2.innerHTML = '<button id="newGameButton" onclick="changeImageAndButtons(\'new2\')">New Game</button> <button id="helpButton" onclick="changeImageAndButtons(\'help2\')">Help</button>';
    } else if (buttonPressed === 'easy2') {
        imageFlappy.src = "./maps/flappy/flappy_light.png"
        textContainer2.innerHTML = '<p>After selecting the difficulty the user will be<br> given a timer of 5 seconds to prepare and then the game will start. This is the game screen where the user plays the game. The user can open the "Settings" menu by clicking on the "gear" icon on the top-right of the screen or by pressing "Esc" on the keyboard. </p>';
        buttonContainer2.innerHTML = '<button id="settingsButton" onclick="changeImageAndButtons(\'settings2\')">Esc / Settings</button>';
    } else if (buttonPressed === 'settings2'){
        imageFlappy.src = "./maps/flappy/flappy_settings.png"
        textContainer2.innerHTML = '<p>On pressing the gear icon(Settings Menu) while playing the game. The game will pause and the Settings menu will be shown<br> to the user. The menu will have "Themes", "Help" and "Exit" buttons. </p>';
        buttonContainer2.innerHTML = '<button id="crossButton" onclick="changeImageAndButtons(\'cross21\')">X</button> <button id="themesButton" onclick="changeImageAndButtons(\'themes2\')">Themes</button> <button id="howToPlayButton" onclick="changeImageAndButtons(\'htpIg2\')">How To Play</button> <button id="exitButton" onclick="changeImageAndButtons(\'exit2\')">Exit</button>';
    } else if (buttonPressed === 'cross21'){
        imageFlappy.src = "./maps/flappy/flappy_light.png"
        textContainer2.innerHTML = '<p>After selecting the difficulty the user will be<br> given a timer of 5 seconds to prepare and then the game will start. This is the game screen where the user plays the game. The user can open the "Settings" menu by clicking on the "gear" icon on the top-right of the screen or by pressing "Esc" on the keyboard. </p>';
        buttonContainer2.innerHTML = '<button id="settingsButton" onclick="changeImageAndButtons(\'settings2\')">Esc / Settings</button>';
    } else if (buttonPressed === 'themes2'){
        imageFlappy.src = "./maps/flappy/flappy_themes.png"
        textContainer2.innerHTML = '<p>On selecting the Themes button from the Settings option the User will have Light and Dark Theme Settings choices. <br>The "Back" button will take the User back to the game. </p>';
        buttonContainer2.innerHTML = '<button id="settingsButton" onclick="changeImageAndButtons(\'light2\')">Light</button> <button id="settingsButton" onclick="changeImageAndButtons(\'dark2\')">Dark</button> <button id="settingsButton" onclick="changeImageAndButtons(\'back2\')">Back</button>';
    } else if (buttonPressed === 'htpIg2'){
        imageFlappy.src = "./maps/flappy/flappy_htp_ig.png"
        textContainer2.innerHTML = '<p>On pressing the Help button the User can again go through the controls of the game and will not have to go to the main menu<br> to read the controls. The "Back" button will take the User back to the game. </p>';
        buttonContainer2.innerHTML = '<button id="settingsButton" onclick="changeImageAndButtons(\'back2\')">Back</button>';
    } else if (buttonPressed === 'exit2'){
        imageFlappy.src = "./maps/flappy/flappy_exit.png"
        textContainer2.innerHTML = '<p>On pressing the Exit button the user will be given a prompt to reconsider their choice if he presses "Yes" the user<br>will be redirected to the main menu. If he presses "NO" he will be taken to the settings menu. </p>';
        buttonContainer2.innerHTML = '<button id="settingsButton" onclick="changeImageAndButtons(\'yes2\')">Yes</button> <button id="settingsButton" onclick="changeImageAndButtons(\'back2\')">No</button>';
    } else if (buttonPressed === 'light2') {
        imageFlappy.src = "./maps/flappy/flappy_light.png"
        textContainer2.innerHTML = '<p>After selecting the difficulty the user will be<br> given a timer of 5 seconds to prepare and then the game will start. This is the game screen where the user plays the game. The user can open the "Settings" menu by clicking on the "gear" icon on the top-right of the screen or by pressing "Esc" on the keyboard. </p>';
        buttonContainer2.innerHTML = '<button id="settingsButton" onclick="changeImageAndButtons(\'settings2\')">Esc / Settings</button>';
    } else if (buttonPressed === 'dark2') {
        imageFlappy.src = "./maps/flappy/flappy_dark.png"
        textContainer2.innerHTML = '<p>After selecting the difficulty the user will be<br> given a timer of 5 seconds to prepare and then the game will start. This is the game screen where the user plays the game. The user can open the "Settings" menu by clicking on the "gear" icon on the top-right of the screen or by pressing "Esc" on the keyboard. </p>';
        buttonContainer2.innerHTML = '<button id="settingsButton" onclick="changeImageAndButtons(\'settings2\')">Esc / Settings</button>';
    } else if (buttonPressed === 'back2') {
        imageFlappy.src = "./maps/flappy/flappy_settings.png"
        textContainer2.innerHTML = '<p>On pressing the gear icon(Settings Menu) while playing the game. The game will pause and the Settings menu will be shown<br> to the user. The menu will have "Themes", "Help" and "Exit" buttons. </p>';
        buttonContainer2.innerHTML = '<button id="crossButton" onclick="changeImageAndButtons(\'cross21\')">X</button> <button id="themesButton" onclick="changeImageAndButtons(\'themes2\')">Themes</button> <button id="howToPlayButton" onclick="changeImageAndButtons(\'htpIg2\')">Help</button> <button id="exitButton" onclick="changeImageAndButtons(\'exit2\')">Exit</button>';
    } else if (buttonPressed === 'yes2') {
        imageFlappy.src = "./maps/flappy/flappy1.png"
        textContainer2.innerHTML = '<p>This will be the landing page for the user if they select the "Play" button under the Flappy Bird Logo on the GameBox Screen.<br>The user will see three buttons on the Screen "New Game", "Help" and "Exit".<br>On selecting the "Exit" the user will be redirected to the GameBox Screen.</p>';
        buttonContainer2.innerHTML = '<button id="newGameButton" onclick="changeImageAndButtons(\'new2\')">New Game</button> <button id="helpButton" onclick="changeImageAndButtons(\'help2\')">Help</button>';
    }

    if (buttonPressed === 'new3') {
        imageDino.src = "./maps/dino/dino_diff.png"
        textContainer3.innerHTML = '<p>On selecting the New Game Button the Select Difficulty screen will open. Where the user can select the difficulty of the game<br>The difficulties are "Easy", "Medium" and "Hard". After selecting the difficulty the user will be<br> given a timer of 5 seconds to prepare and then the game will start. </p>';
        buttonContainer3.innerHTML = '<button id="crossButton" onclick="changeImageAndButtons(\'cross3\')">X</button> <button id="themesButton" onclick="changeImageAndButtons(\'easy3\')">Easy</button> <button id="howToPlayButton" onclick="changeImageAndButtons(\'medium3\')">Medium</button> <button id="exitButton" onclick="changeImageAndButtons(\'hard3\')">Hard</button>';
    } else if (buttonPressed === 'help3') {
        imageDino.src = "./maps/dino/dino_help1.png";
        textContainer3.innerHTML = '<p>From the Main Menu Screen if the user selects "Help" button then the user will be redirected to the Help Page<br>The Help page will have About the game open from default. </p>';
        buttonContainer3.innerHTML = '<button id="aboutButton" onclick="changeImageAndButtons(\'about3\')">About Game</button> <button id="howToPlayButton" onclick="changeImageAndButtons(\'htp3\')">How to Play</button> <button id="backButton" onclick="resetImageAndButtons()">Back</button>';
    } else if (buttonPressed === 'about3') {
        imageDino.src = "./maps/dino/dino_help1.png";
        textContainer3.innerHTML = '<p>From the Main Menu Screen if the user selects "Help" button then the user will be redirected to the Help Page<br>The Help page will have About the game open from default. </p>';
        buttonContainer3.innerHTML = '<button id="aboutButton" onclick="changeImageAndButtons(\'about3\')">About Game</button> <button id="howToPlayButton" onclick="changeImageAndButtons(\'htp3\')">How to Play</button> <button id="backButton" onclick="resetImageAndButtons()">Back</button>';
    } else if (buttonPressed === 'htp3') {
        imageDino.src = "./maps/dino/dino_help2.png";
        textContainer3.innerHTML = '<p>The User will have the option to select How To Play Button and will be now displayed with the information on Hand Gestures<br>deployed in this game. The user can select the About Game Button to read about the game from this screen again.<br> The back button will take the user back to the Main Menu of the game.</p>';
        buttonContainer3.innerHTML = '<button id="aboutButton" onclick="changeImageAndButtons(\'about3\')">About Game</button> <button id="howToPlayButton" onclick="changeImageAndButtons(\'htp3\')">How to Play</button> <button id="backButton" onclick="resetImageAndButtons()">Back</button>';
    } else if (buttonPressed === 'cross3'){
        imageDino.src = "./maps/dino/dino1.png"
        textContainer3.innerHTML = '<p>This will be the landing page for the user if they select the "Play" button under the Chrome Dino Logo on the GameBox Screen.<br>The user will see three buttons on the Screen "New Game", "Help" and "Exit".<br>On selecting the "Exit" the user will be redirected to the GameBox Screen.</p>';
        buttonContainer3.innerHTML = '<button id="newGameButton" onclick="changeImageAndButtons(\'new3\')">New Game</button> <button id="helpButton" onclick="changeImageAndButtons(\'help3\')">Help</button>';
    } else if (buttonPressed === 'easy3') {
        imageDino.src = "./maps/dino/dino_easy.png"
        textContainer3.innerHTML = '<p>After selecting the difficulty the user will be<br> given a timer of 5 seconds to prepare and then the game will start. This is the game screen where the user plays the game. The user can open the "Settings" menu by clicking on the "gear" icon on the top-right of the screen or by pressing "Esc" on the keyboard. </p>';
        buttonContainer3.innerHTML = '<button id="settingsButton" onclick="changeImageAndButtons(\'settings3\')">Esc / Settings</button>';
    } else if (buttonPressed === 'medium3') {
        imageDino.src = "./maps/dino/dino_medium.png"
        textContainer3.innerHTML = '<p>After selecting the difficulty the user will be<br> given a timer of 5 seconds to prepare and then the game will start. This is the game screen where the user plays the game. The user can open the "Settings" menu by clicking on the "gear" icon on the top-right of the screen or by pressing "Esc" on the keyboard. </p>';
        buttonContainer3.innerHTML = '<button id="settingsButton" onclick="changeImageAndButtons(\'settings3\')">Esc / Settings</button>';
    } else if (buttonPressed === 'hard3') {
        imageDino.src = "./maps/dino/dino_hard.png"
        textContainer3.innerHTML = '<p>After selecting the difficulty the user will be<br> given a timer of 5 seconds to prepare and then the game will start. This is the game screen where the user plays the game. The user can open the "Settings" menu by clicking on the "gear" icon on the top-right of the screen or by pressing "Esc" on the keyboard. </p>';
        buttonContainer3.innerHTML = '<button id="settingsButton" onclick="changeImageAndButtons(\'settings3\')">Esc / Settings</button>';
    } else if (buttonPressed === 'settings3'){
        imageDino.src = "./maps/dino/dino_settings.png"
        textContainer3.innerHTML = '<p>On pressing the gear icon(Settings Menu) while playing the game. The game will pause and the Settings menu will be shown<br> to the user. The menu will have "Themes", "Help" and "Exit" buttons. </p>';
        buttonContainer3.innerHTML = '<button id="crossButton" onclick="changeImageAndButtons(\'cross31\')">X</button> <button id="themesButton" onclick="changeImageAndButtons(\'themes3\')">Themes</button> <button id="howToPlayButton" onclick="changeImageAndButtons(\'htpIg3\')">How To Play</button> <button id="exitButton" onclick="changeImageAndButtons(\'exit3\')">Exit</button>';
    } else if (buttonPressed === 'cross31'){
        imageDino.src = "./maps/dino/dino_easy.png"
        textContainer3.innerHTML = '<p>After selecting the difficulty the user will be<br> given a timer of 5 seconds to prepare and then the game will start. This is the game screen where the user plays the game. The user can open the "Settings" menu by clicking on the "gear" icon on the top-right of the screen or by pressing "Esc" on the keyboard. </p>';
        buttonContainer3.innerHTML = '<button id="settingsButton" onclick="changeImageAndButtons(\'settings3\')">Esc / Settings</button>';
    } else if (buttonPressed === 'themes3'){
        imageDino.src = "./maps/dino/dino_themes.png"
        textContainer3.innerHTML = '<p>On selecting the Themes button from the Settings option the User will have Light and Dark Theme Settings choices. <br>The "Back" button will take the User back to the game. </p>';
        buttonContainer3.innerHTML = '<button id="settingsButton" onclick="changeImageAndButtons(\'light3\')">Light</button> <button id="settingsButton" onclick="changeImageAndButtons(\'dark3\')">Dark</button> <button id="settingsButton" onclick="changeImageAndButtons(\'back3\')">Back</button>';
    } else if (buttonPressed === 'htpIg3'){
        imageDino.src = "./maps/dino/dino_htp_ig.png"
        textContainer3.innerHTML = '<p>On pressing the Help button the User can again go through the controls of the game and will not have to go to the main menu<br> to read the controls. The "Back" button will take the User back to the game. </p>';
        buttonContainer3.innerHTML = '<button id="settingsButton" onclick="changeImageAndButtons(\'back3\')">Back</button>';
    } else if (buttonPressed === 'exit3'){
        imageDino.src = "./maps/dino/dino_exit.png"
        textContainer3.innerHTML = '<p>On pressing the Exit button the user will be given a prompt to reconsider their choice if he presses "Yes" the user<br>will be redirected to the main menu. If he presses "NO" he will be taken to the settings menu. </p>';
        buttonContainer3.innerHTML = '<button id="settingsButton" onclick="changeImageAndButtons(\'yes3\')">Yes</button> <button id="settingsButton" onclick="changeImageAndButtons(\'back3\')">No</button>';
    } else if (buttonPressed === 'light3') {
        imageDino.src = "./maps/dino/dino_easy.png"
        textContainer3.innerHTML = '<p>After selecting the difficulty the user will be<br> given a timer of 5 seconds to prepare and then the game will start. This is the game screen where the user plays the game. The user can open the "Settings" menu by clicking on the "gear" icon on the top-right of the screen or by pressing "Esc" on the keyboard. </p>';
        buttonContainer3.innerHTML = '<button id="settingsButton" onclick="changeImageAndButtons(\'settings3\')">Esc / Settings</button>';
    } else if (buttonPressed === 'dark3') {
        imageDino.src = "./maps/dino/dino_dark.png"
        textContainer3.innerHTML = '<p>After selecting the difficulty the user will be<br> given a timer of 5 seconds to prepare and then the game will start. This is the game screen where the user plays the game. The user can open the "Settings" menu by clicking on the "gear" icon on the top-right of the screen or by pressing "Esc" on the keyboard. </p>';
        buttonContainer3.innerHTML = '<button id="settingsButton" onclick="changeImageAndButtons(\'settings3\')">Esc / Settings</button>';
    } else if (buttonPressed === 'back3') {
        imageDino.src = "./maps/dino/dino_settings.png"
        textContainer3.innerHTML = '<p>On pressing the gear icon(Settings Menu) while playing the game. The game will pause and the Settings menu will be shown<br> to the user. The menu will have "Themes", "Help" and "Exit" buttons. </p>';
        buttonContainer3.innerHTML = '<button id="crossButton" onclick="changeImageAndButtons(\'cross31\')">X</button> <button id="themesButton" onclick="changeImageAndButtons(\'themes3\')">Themes</button> <button id="howToPlayButton" onclick="changeImageAndButtons(\'htpIg3\')">Help</button> <button id="exitButton" onclick="changeImageAndButtons(\'exit3\')">Exit</button>';
    } else if (buttonPressed === 'yes3') {
        imageDino.src = "./maps/dino/dino1.png"
        textContainer3.innerHTML = '<p>This will be the landing page for the user if they select the "Play" button under the Chrome Dino Logo on the GameBox Screen.<br>The user will see three buttons on the Screen "New Game", "Help" and "Exit".<br>On selecting the "Exit" the user will be redirected to the GameBox Screen.</p>';
        buttonContainer3.innerHTML = '<button id="newGameButton" onclick="changeImageAndButtons(\'new3\')">New Game</button> <button id="helpButton" onclick="changeImageAndButtons(\'help3\')">Help</button>';
    }
}

function resetImageAndButtons() {
    var imageMario = document.getElementById("mario");
    var imageFlappy = document.getElementById("flappy");
    var imageDino = document.getElementById("dino");

    var buttonContainer = document.getElementById("button-container1");
    var buttonContainer2 = document.getElementById("button-container2");
    var buttonContainer3 = document.getElementById("button-container3");

    var textContainer = document.getElementById("text-container1");
    var textContainer2 = document.getElementById("text-container2");
    var textContainer3 = document.getElementById("text-container3");

    // Reset the image
    imageMario.src = "./maps/mario/mario1.png";
    imageDino.src = "./maps/dino/dino1.png"
    imageFlappy.src = "./maps/flappy/flappy1.png"

    // Reset the buttons
    buttonContainer.innerHTML = '<button id="newGameButton" onclick="changeImageAndButtons(\'new1\')">New Game</button> <button id="helpButton" onclick="changeImageAndButtons(\'help1\')">Help</button>';
    buttonContainer2.innerHTML = '<button id="newGameButton" onclick="changeImageAndButtons(\'new2\')">New Game</button> <button id="helpButton" onclick="changeImageAndButtons(\'help2\')">Help</button>';
    buttonContainer3.innerHTML = '<button id="newGameButton" onclick="changeImageAndButtons(\'new3\')">New Game</button> <button id="helpButton" onclick="changeImageAndButtons(\'help3\')">Help</button>';

    // Reset the texts
    textContainer.innerHTML = '<p>This will be the landing page for the user if they select the "Play" button under the Super Mario Logo on the GameBox Screen.<br>The user will see three buttons on the Screen "New Game", "Help" and "Exit".<br>On selecting the "Exit" the user will be redirected to the GameBox Screen.</p>';
    textContainer2.innerHTML = '<p>This will be the landing page for the user if they select the "Play" button under the Flappy Bird Logo on the GameBox Screen.<br>The user will see three buttons on the Screen "New Game", "Help" and "Exit".<br>On selecting the "Exit" the user will be redirected to the GameBox Screen.</p>';
    textContainer3.innerHTML = '<p>This will be the landing page for the user if they select the "Play" button under the Chrome Dino Logo on the GameBox Screen.<br>The user will see three buttons on the Screen "New Game", "Help" and "Exit".<br>On selecting the "Exit" the user will be redirected to the GameBox Screen.</p>';

}

const chartImages = document.querySelectorAll('.chart-image');

chartImages.forEach(chartImage => {
  chartImage.addEventListener('click', () => {
    console.log('Clicked on image!');
    chartImage.classList.toggle('enlarged');
  });
});



  