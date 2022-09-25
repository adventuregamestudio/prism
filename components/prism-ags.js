Prism.languages.ags = {
	'preprocessor': {
		pattern: /#.*/,
		greedy: true,
		alias: 'constant'
	},
	// Greedy C-like comment.
	'comment': Prism.languages.clike.comment,
	// Greedy C-like string.
	'string': Prism.languages.clike.string,
	/*
	  Constant (pre-defined macros, no boundaries)
	  --------
	  "AGS_MAX_HOTSPOTS" "AGS_MAX_INV_ITEMS" "AGS_MAX_OBJECTS" "AGS_MAX_REGIONS" "AGS_NEW_STRINGS" "AGS_SUPPORTS_IFVER" "DEBUG" "LRPRECEDENCE" "MAX_LISTBOX_SAVED_GAMES" "NEW_DIALOGOPTS_API" "NEW_KEYINPUT_API" "PALETTE_SIZE" "SCRIPT_API_vXXX" "SCRIPT_COMPAT_vXXX" "STRICT" "STRICT_AUDIO" "STRICT_STRINGS"
	*/
	'constant': /(?:AGS_(?:MAX_(?:HOTSPOT|INV_ITEM|OBJECT|REGION)S|NEW_STRINGS|SUPPORTS_IFVER)|DEBUG|LRPRECEDENCE|MAX_LISTBOX_SAVED_GAMES|NEW_(?:DIALOGOPTS|KEYINPUT)_API|PALETTE_SIZE|STRICT(?:_(?:AUDIO|STRINGS))?|SCRIPT_(?:API|COMPAT)_v\d+)/,
	// Non-greedy C-like numbers.
	'number': Prism.languages.clike.number,
	// Early matches for functions and structs.  Matches skipped by using
	// lookbehind are still available for highlighting.  Matching a function
	// with an explicit return type requires looking ahead for opening
	// parentheses.  Note that in terms of highlighting we keep pretending that
	// function type is a command rather than an alias of int.
	'function-def': {
		pattern: /(\b(?:String|bool|char|f(?:loat|unction)|int|short|void)(?:\[\])?\s+(?:noloopcheck\s+)?)\w+(?:::\w+)?\s*\(/,
		lookbehind: true,
		inside: {
			'function': /[^\s(]+/,
			'punctuation': /\(/
		}
	},
	'struct-name': {
		pattern: /(\bstruct\s+)\w+/,
		lookbehind: true,
		alias: 'class-name'
	},
	'enum-name': {
		pattern: /(\enum\s+)\w+/,
		lookbehind: true,
		alias: 'class-name'
	},
	/*
	  Type
	  ----
	  "String" "bool" "char" "float" "int" "short" "void"
	*/
	'type': {
		pattern: /\b(?:String|bool|char|float|int|short|void)\b/,
		alias: 'builtin'
	},
	/*
	  Enum types
	  ----------
	  "Alignment" "AudioFileType" "AudioPriority" "BlockingStyle" "eCDAudioFunction" "CharacterDirection" "CursorMode" "CutsceneSkipType" "DialogOptionSayStyle" "DialogOptionState" "Direction" "EventType" "FileMode" "FileSeek" "eFlipDirection" "FontType" "GUIPopupStyle" "HorizontalAlignment" "InputType" "LocationType" "LogLevel" "MouseButton" "eOperatingSystem" "RepeatStyle" "RoundDirection" "SkipSpeechStyle" "SortStyle" "eSpeechStyle" "StopMovementStyle" "StringCompareStyle" "TransitionStyle" "VideoSkipStyle" "eVoiceMode" "WalkWhere"

	  "eKeyCode"
	*/
	'enum-type': {
		pattern: /\b(?:A(?:lignment|udio(?:FileType|Priority))|BlockingStyle|C(?:haracterDirection|u(?:(?:rsorMod|tsceneSkipTyp)e))|Di(?:alogOptionS(?:(?:ayStyl|tat)e)|rection)|EventType|F(?:ile(?:Mode|Seek)|ontType)|GUIPopupStyle|HorizontalAlignment|InputType|Lo(?:cationType|gLevel)|MouseButton|R(?:epeatStyle|oundDirection)|S(?:(?:kipSpeech|ort|t(?:opMovement|ringCompare))Style)|TransitionStyle|VideoSkipStyle|WalkWhere|e(?:CDAudioFunction|FlipDirection|KeyCode|OperatingSystem|(?:SpeechStyl|VoiceMod)e))\b/,
		alias: 'builtin'
	},
	/*
	  Enum
	  ----
	  "eAlignNone" "eAlignTopLeft" "eAlignTopCenter" "eAlignTopRight" "eAlignMiddleLeft" "eAlignMiddleCenter" "eAlignMiddleRight" "eAlignBottomLeft" "eAlignBottomCenter" "eAlignBottomRight" "eAlignHasLeft" "eAlignHasRight" "eAlignHasTop" "eAlignHasBottom" "eAlignHasHorCenter" "eAlignHasVerCenter" "eAudioFileOGG" "eAudioFileMP3" "eAudioFileWAV" "eAudioFileVOC" "eAudioFileMIDI" "eAudioFileMOD" "eAudioPriorityVeryLow" "eAudioPriorityLow" "eAudioPriorityNormal" "eAudioPriorityHigh" "eAudioPriorityVeryHigh" "eBlock" "eNoBlock" "eCDIsDriverPresent" "eCDGetPlayingStatus" "eCDPlayTrack" "eCDPausePlayback" "eCDResumePlayback" "eCDGetNumTracks" "eCDEject" "eCDCloseTray" "eCDGetCDDriveCount" "eCDSelectActiveCDDrive" "eDirectionDown" "eDirectionLeft" "eDirectionRight" "eDirectionUp" "eDirectionDownRight" "eDirectionUpRight" "eDirectionDownLeft" "eDirectionUpLeft" "eDirectionNone" "eSkipESCOnly" "eSkipAnyKey" "eSkipMouseClick" "eSkipAnyKeyOrMouseClick" "eSkipESCOrRightButton" "eSkipScriptOnly" "eSayUseOptionSetting" "eSayAlways" "eSayNever" "eOptionOff" "eOptionOn" "eOptionOffForever" "eForwards" "eBackwards" "eEventLeaveRoom" "eEventEnterRoomBeforeFadein" "eEventGotScore" "eEventGUIMouseDown" "eEventGUIMouseUp" "eEventAddInventory" "eEventLoseInventory" "eEventRestoreGame" "eFileRead" "eFileWrite" "eFileAppend" "eSeekBegin" "eSeekCurrent" "eSeekEnd" "eFlipLeftToRight" "eFlipUpsideDown" "eFlipBoth" "eGUIPopupNormal" "eGUIPopupMouseYPos" "eGUIPopupModal" "eGUIPopupPersistent" "eAlignLeft" "eAlignCenter" "eAlignRight" "eInputNone" "eInputKeyboard" "eInputMouse" "eInputAny" "eLocationNothing" "eLocationHotspot" "eLocationCharacter" "eLocationObject" "eLogAlert" "eLogFatal" "eLogError" "eLogWarn" "eLogInfo" "eLogDebug" "eMouseLeft" "eMouseRight" "eMouseMiddle" "eMouseLeftInv" "eMouseMiddleInv" "eMouseRightInv" "eMouseWheelNorth" "eMouseWheelSouth" "eOSDOS" "eOSWindows" "eOSLinux" "eOSMacOS" "eOSAndroid" "eOSiOS" "eOSPSP" "eOSWeb" "eOSFreeBSD" "eOnce" "eRepeat" "eRoundDown" "eRoundNearest" "eRoundUp" "eSkipNone" "eSkipKeyMouseTime" "eSkipKeyTime" "eSkipTime" "eSkipKeyMouse" "eSkipMouseTime" "eSkipKey" "eSkipMouse" "eNonSorted" "eSorted" "eSpeechLucasarts" "eSpeechSierra" "eSpeechSierraWithBackground" "eSpeechFullScreen" "eKeepMoving" "eStopMoving" "eCaseInsensitive" "eCaseSensitive" "eTransitionFade" "eTransitionInstant" "eTransitionDissolve" "eTransitionBoxout" "eTransitionCrossfade" "eVideoSkipNotAllowed" "eVideoSkipEscKey" "eVideoSkipAnyKey" "eVideoSkipAnyKeyOrMouse" "eSpeechTextOnly" "eSpeechVoiceAndText" "eSpeechVoiceOnly" "eAnywhere" "eWalkableAreas"

	  "eKeyNone" "eKeyCtrlA" "eKeyCtrlB" "eKeyCtrlC" "eKeyCtrlD" "eKeyCtrlE" "eKeyCtrlF" "eKeyCtrlG" "eKeyCtrlH" "eKeyCtrlI" "eKeyCtrlJ" "eKeyCtrlK" "eKeyCtrlL" "eKeyCtrlM" "eKeyCtrlN" "eKeyCtrlO" "eKeyCtrlP" "eKeyCtrlQ" "eKeyCtrlR" "eKeyCtrlS" "eKeyCtrlT" "eKeyCtrlU" "eKeyCtrlV" "eKeyCtrlW" "eKeyCtrlX" "eKeyCtrlY" "eKeyCtrlZ" "eKey0" "eKey1" "eKey2" "eKey3" "eKey4" "eKey5" "eKey6" "eKey7" "eKey8" "eKey9" "eKeyA" "eKeyB" "eKeyC" "eKeyD" "eKeyE" "eKeyF" "eKeyG" "eKeyH" "eKeyI" "eKeyJ" "eKeyK" "eKeyL" "eKeyM" "eKeyN" "eKeyO" "eKeyP" "eKeyQ" "eKeyR" "eKeyS" "eKeyT" "eKeyU" "eKeyV" "eKeyW" "eKeyX" "eKeyY" "eKeyZ" "eKeyAmpersand" "eKeyAsterisk" "eKeyAt" "eKeyBackSlash" "eKeyBackspace" "eKeyCloseBracket" "eKeyCloseParenthesis" "eKeyColon" "eKeyComma" "eKeyDelete" "eKeyDollar" "eKeyDoubleQuote" "eKeyEquals" "eKeyEscape" "eKeyExclamationMark" "eKeyForwardSlash" "eKeyGreaterThan" "eKeyHash" "eKeyHyphen" "eKeyInsert" "eKeyLessThan" "eKeyOpenBracket" "eKeyOpenParenthesis" "eKeyPercent" "eKeyPeriod" "eKeyPlus" "eKeyQuestionMark" "eKeyReturn" "eKeySemiColon" "eKeySingleQuote" "eKeySpace" "eKeyTab" "eKeyUnderscore" "eKeyF1" "eKeyF2" "eKeyF3" "eKeyF4" "eKeyF5" "eKeyF6" "eKeyF7" "eKeyF8" "eKeyF9" "eKeyF10" "eKeyF11" "eKeyF12" "eKeyHome" "eKeyUpArrow" "eKeyPageUp" "eKeyLeftArrow" "eKeyNumPad5" "eKeyRightArrow" "eKeyEnd" "eKeyDownArrow" "eKeyPageDown" "eKeyShiftLeft" "eKeyShiftRight" "eKeyCtrlLeft" "eKeyCtrlRight" "eKeyAltLeft" "eKeyAltRight" "eKeyModShiftLeft" "eKeyModShiftRight" "eKeyModShift" "eKeyModCtrlLeft" "eKeyModCtrlRight" "eKeyModCtrl" "eKeyModAltLeft" "eKeyModAltRight" "eKeyModAlt" "eKeyModNum" "eKeyModCaps" "eKeyCodeMask" "eKeyModMask"
	*/
	'enum-fixed': {
		pattern: /\be(?:A(?:lign(?:Bottom(?:Center|(?:Lef|Righ)t)|Center|Has(?:Bottom|HorCenter|Left|Right|Top|VerCenter)|Left|Middle(?:Center|(?:Lef|Righ)t)|None|Right|Top(?:Center|(?:Lef|Righ)t))|nywhere|udio(?:File(?:M(?:IDI|OD|P3)|OGG|VOC|WAV)|Priority(?:High|Low|Normal|Very(?:High|Low))))|B(?:ackwards|lock)|C(?:D(?:CloseTray|Eject|Get(?:CDDriveCount|(?:NumTrack|PlayingStatu)s)|IsDriverPresent|P(?:(?:ausePlayb|layTr)ack)|ResumePlayback|SelectActiveCDDrive)|ase(?:(?:Ins|S)ensitive))|Direction(?:Down(?:(?:Lef|Righ)t)?|Left|None|Right|Up(?:(?:Lef|Righ)t)?)|Event(?:AddInventory|EnterRoomBeforeFadein|G(?:UIMouse(?:Down|Up)|otScore)|L(?:eaveRoom|oseInventory)|RestoreGame)|F(?:ile(?:Append|Read|Write)|lip(?:Both|LeftToRight|UpsideDown)|orwards)|GUIPopup(?:Mo(?:dal|useYPos)|Normal|Persistent)|Input(?:Any|Keyboard|(?:Mous|Non)e)|Ke(?:epMoving|y(?:A(?:lt(?:(?:Lef|Righ)t)|mpersand|sterisk|t)|Back(?:Slash|space)|C(?:lose(?:Bracket|Parenthesis)|o(?:deMask|lon|mma)|trl(?:(?:Lef|Righ)t|[A-Z]))|D(?:elete|o(?:llar|ubleQuote|wnArrow))|E(?:nd|quals|scape|xclamationMark)|F(?:1[012]|orwardSlash|[1-9])|GreaterThan|H(?:ash|ome|yphen)|Insert|Le(?:ftArrow|ssThan)|Mod(?:Alt(?:(?:Lef|Righ)t)?|C(?:aps|trl(?:(?:Lef|Righ)t)?)|Mask|Num|Shift(?:(?:Lef|Righ)t)?)|N(?:one|umPad5)|Open(?:Bracket|Parenthesis)|P(?:age(?:Down|Up)|er(?:cent|iod)|lus)|QuestionMark|R(?:eturn|ightArrow)|S(?:emiColon|hift(?:(?:Lef|Righ)t)|(?:ingleQuot|pac)e)|Tab|U(?:nderscore|pArrow)|[0-9A-Z]))|Lo(?:cation(?:Character|Hotspot|Nothing|Object)|g(?:Alert|Debug|Error|Fatal|Info|Warn))|Mouse(?:Left(?:Inv)?|Middle(?:Inv)?|Right(?:Inv)?|Wheel(?:(?:Nor|Sou)th))|No(?:Block|nSorted)|O(?:S(?:Android|DOS|FreeBSD|Linux|MacOS|PSP|W(?:eb|indows)|iOS)|nce|ptionO(?:ff(?:Forever)?|n))|R(?:epeat|ound(?:Down|Nearest|Up))|S(?:ay(?:Always|Never|UseOptionSetting)|eek(?:Begin|Current|End)|kip(?:AnyKey(?:OrMouseClick)?|ESCO(?:nly|rRightButton)|Key(?:(?:Mous(?:eTim)?|Tim)e)?|Mouse(?:Click|Time)?|None|ScriptOnly|Time)|orted|peech(?:FullScreen|Lucasarts|Sierra(?:WithBackground)?|TextOnly|Voice(?:AndText|Only))|topMoving)|Transition(?:Boxout|Crossfade|Dissolve|Fade|Instant)|VideoSkip(?:AnyKey(?:OrMouse)?|EscKey|NotAllowed)|WalkableAreas)\b/,
		alias: 'constant'
	},
	'enum-dynamic': {
		pattern: /\be(?:Font|Mode)\w+\b/,
		alias: 'constant'
	},
	/*
	  keywords
	  --------
	  "break" "case" "continue" "do" "else" "enum" "export" "for" "function" "if" "import" "managed" "new" "noloopcheck" "protected" "readonly" "return" "static" "struct" "switch" "this" "while" "writeprotected"
	*/
	'keyword': /\b(?:break|c(?:(?:as|ontinu)e)|do|e(?:lse|num|xport)|f(?:or|unction)|i(?:f|mport)|managed|n(?:ew|oloopcheck)|protected|re(?:adonly|turn)|s(?:t(?:atic|ruct)|witch)|this|w(?:hile|riteprotected))\b/,
	/*
	  Global functions
	  ----------------
	  "AbortGame" "CallRoomScript" "ClaimEvent" "Debug" "DeleteSaveSlot" "DisableInterface" "EnableInterface" "EndCutscene" "GetGameOption" "GetGameParameter" "GetGameSpeed" "GetGlobalInt" "GetGraphicalVariable" "GetLocationType" "GetPlayerCharacter" "GetTextHeight" "GetTextWidth" "GetTranslation" "GiveScore" "GetFontHeight" "GetFontLineSpacing" "InventoryScreen" "IsGamePaused" "IsInterfaceEnabled" "IsInteractionAvailable" "IsKeyPressed" "IsTimerExpired" "IsTranslationAvailable" "MoveCharacterToHotspot" "MoveCharacterToObject" "PauseGame" "QuitGame" "Random" "RestartGame" "RestoreGameDialog" "RestoreGameSlot" "RunAGSGame" "SaveGameDialog" "SaveGameSlot" "SaveScreenShot" "SetAmbientLightLevel" "SetAmbientTint" "SetGameOption" "SetGameSpeed" "SetGlobalInt" "SetGraphicalVariable" "SetMultitaskingMode" "SetRestartPoint" "SetTextWindowGUI" "SetTimer" "SkipCutscene" "SkipUntilCharacterStops" "StartCutscene" "UpdateInventory" "UnPauseGame"

	  "Display" "DisplayAt" "DisplayAtY" "DisplayMessage" "DisplayMessageAtY" "DisplayTopBar"

	  "CDAudio" "IsSpeechVoxAvailable" "PlayFlic" "PlaySilentMIDI" "PlayVideo" "SetSpeechVolume"

	  "CyclePalette" "SetPalRGB" "UpdatePalette"

	  "AreThingsOverlapping" "DisableGroundLevelAreas" "EnableGroundLevelAreas" "GetBackgroundFrame" "GetDrawingSurfaceForWalkableArea" "GetDrawingSurfaceForWalkbehind" "GetScalingAt" "GetViewportX" "GetViewportY" "GetWalkableAreaAt" "GetWalkableAreaAtRoom" "GetWalkableAreaAtScreen" "HasPlayerBeenInRoom" "ReleaseViewport" "RemoveWalkableArea" "ResetRoom" "RestoreWalkableArea" "SetAreaScaling" "SetBackgroundFrame" "SetViewport" "SetWalkBehindBase"

	  "FadeIn" "FadeOut" "FlipScreen" "SetFadeColor" "SetNextScreenTransition" "SetScreenTransition" "ShakeScreen" "ShakeScreenBackground" "TintScreen"

	  "FloatToInt" "IntToFloat"

	  "StopDialog"
	*/
	'global-function': {
		pattern: /\b(?:A(?:bortGame|reThingsOverlapping)|C(?:DAudio|allRoomScript|laimEvent|yclePalette)|D(?:e(?:bug|leteSaveSlot)|is(?:able(?:GroundLevelAreas|Interface)|play(?:AtY?|Message(?:AtY)?|TopBar)?))|En(?:able(?:GroundLevelAreas|Interface)|dCutscene)|F(?:ade(?:In|Out)|l(?:ipScreen|oatToInt))|G(?:et(?:BackgroundFrame|DrawingSurfaceForWalk(?:ableArea|behind)|Font(?:Height|LineSpacing)|G(?:ame(?:Option|Parameter|Speed)|lobalInt|raphicalVariable)|LocationType|PlayerCharacter|ScalingAt|T(?:ext(?:Height|Width)|ranslation)|Viewport[XY]|WalkableAreaAt(?:Room|Screen)?)|iveScore)|HasPlayerBeenInRoom|I(?:n(?:tToFloat|ventoryScreen)|s(?:GamePaused|Inter(?:actionAvailable|faceEnabled)|KeyPressed|SpeechVoxAvailable|T(?:imerExpired|ranslationAvailable)))|MoveCharacterTo(?:(?:Hotspo|Objec)t)|P(?:auseGame|lay(?:Flic|SilentMIDI|Video))|QuitGame|R(?:andom|e(?:leaseViewport|moveWalkableArea|s(?:etRoom|t(?:artGame|ore(?:Game(?:Dialog|Slot)|WalkableArea))))|unAGSGame)|S(?:ave(?:Game(?:Dialog|Slot)|ScreenShot)|et(?:A(?:mbient(?:LightLevel|Tint)|reaScaling)|BackgroundFrame|FadeColor|G(?:ame(?:Option|Speed)|lobalInt|raphicalVariable)|MultitaskingMode|NextScreenTransition|PalRGB|RestartPoint|S(?:creenTransition|peechVolume)|T(?:extWindowGUI|imer)|Viewport|WalkBehindBase)|hakeScreen(?:Background)?|kip(?:Cutscene|UntilCharacterStops)|t(?:artCutscene|opDialog))|TintScreen|U(?:nPauseGame|pdate(?:Inventory|Palette)))\b/,
		alias: 'builtin'
	},
	/*
	  Global objects
	  --------------
	  "AudioChannel" "AudioClip" "Camera" "Character" "DateTime" "Dialog" "DialogOptionsRenderingInfo" "Dictionary" "DrawingSurface" "DynamicSprite" "File" "Game" "GUI" "GUIControl" "Button" "InvWindow" "Label" "ListBox" "Slider" "TextBox" "Hotspot" "InventoryItem" "Maths" "Mouse" "Object" "Overlay" "Parser" "Region" "Room" "Screen" "Set" "Speech" "String" "System" "TextWindowGUI" "ViewFrame" "Viewport"
	*/
	'global-object': {
		pattern: /\b(?:AudioC(?:hannel|lip)|Button|C(?:amera|haracter)|D(?:ateTime|i(?:alog(?:OptionsRenderingInfo)?|ctionary)|(?:rawingSurfac|ynamicSprit)e)|File|G(?:UI(?:Control)?|ame)|Hotspot|Inv(?:Window|entoryItem)|L(?:abel|istBox)|M(?:aths|ouse)|O(?:bject|verlay)|Parser|R(?:egion|oom)|S(?:creen|et|lider|peech|tring|ystem)|Text(?:Box|WindowGUI)|View(?:Frame|port))\b/,
		alias: 'builtin'
	},
	/*
	  Global arrays
	  -------------
	  "character" "dialog" "gui" "inventory" "hotspot" "object" "region" "palette"
	*/
	'global-array': {
		pattern: /\b(?:character|dialog|gui|hotspot|inventory|object|palette|region)\b/,
		alias: 'builtin'
	},
	/*
	  Global game state
	  -----------------
	  "game" "mouse" "palette" "player"
	*/
	'global-state': {
		pattern: /\b(?:game|mouse|p(?:alette|layer))\b/,
		alias: 'builtin'
	},
	/*
	  Built-in managed structs
	  ------------------------
	*/
	'standard-type': {
		pattern: /\bPoint\b/,
		alias: 'builtin'
	},
	/*
	  Dialog control tokens
	  ---------------------
	  "DIALOG_PARSER_SELECTED" "RUN_DIALOG_GOTO_PREVIOUS" "RUN_DIALOG_RETURN" "RUN_DIALOG_STOP_DIALOG"
	*/
	'dialog-tokens': {
		pattern: /\b(?:DIALOG_PARSER_SELECTED|RUN_DIALOG_(?:GOTO_PREVIOUS|RETURN|STOP_DIALOG))\b/,
		alias: 'constant'
	},
	/*
	  Operators
	  ---------
	  "!" "*" "/" "%" "+" "-" "<<" ">>" "&" "|" "^" "==" "!=" ">" "<" ">=" "<=" "&&" "||"
	*/
	'operator': /(?:!=|&&|<[<=]|==|>[=>]|\|\||[!%&*+/<>|^-])/,
	'boolean': /\b(?:fals|tru)e\b/,
	'dot-property': {
		pattern: /\.\w+/,
		inside: {
			'punctuation': /^\./,
			'property': /.*/
		}
	},
	/*
	  Punctuation
	  -----------
	  "(" ")" "," "." ":" ";" "[" "]" "{" "}"
	*/
	'punctuation': /[\](),.:;[{}]/
}
