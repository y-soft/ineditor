var MESSAGE = {
	OK: '확인',
	CANCEL: '취소',
	APPLY: '적용',
	YES: '예',
	NO: '아니요',
	CLOSE: '닫기',
	DETECT: '감지',
	ADD: '추가',
	SELECT: '선택',
	SAVE: '저장',
	DO_NOT_SAVE: '저장안함',
	STEP_BY_STEP: '다음단계',
	CONTINUE: '연속실행',
	UNDO: '원래대로',

	MESSAGE: '메시지',
	PLAY: '재생',
	STOP: '정지',
	TOGGLE: '토글',

	PUBLISH: 'HTML 생성',
	PREVIEW: '미리보기',

	AUDIO_DROP_HERE_1: 'AUDIO FILE<br>DROP HERE!!<br><br>',
	AUDIO_DROP_HERE_2: ' file(s) uploaded',
	IMAGE_DROP_HERE: 'IMAGE FILE<br>DROP HERE!!',
	VIDEO_DROP_HERE: 'VIDEO FILE<br>DROP HERE!!',
	VIDEO_IS_NOTSET: 'VIDEO IS NOT SET',
	FILEREADER_IS_NOT_SUPPORTED: 'FileReader를 지원하지 않아 파일 업로드기능을 사용할 수 없습니다.',
	SERVER_ERROR: '서버 오류입니다.',
	FILETYPE_IS_NOT_SUPPORTED: '지원하지 않는 파일형식입니다.\n',
	FAIL_TO_GENERATE_TMPID: '임시ID 발번이 실패했습니다.',
	OBJECT_IS_NOT_SUPPORTED_UPLOAD: '업로드를 지원하지 않는 객체입니다.',
	SELECTED_OBJECT: '선택된객체',
	EDITOR_HAS_UNSAVED_DATA: '저장하지 않은 데이터가 있습니다.',
	EDITDATA_IS_NOT_FOUND: '편집데이터가 존재하지 않습니다.',
	SAVE_SUCCESS: '저장되었습니다.',

	BROWSER_EXIT: '저장하지 않은 데이터는 사라집니다.',

	FUNC_NEW: '새 문서',
	FUNC_OPEN: '문서 열기',
	FUNC_SAVE: '문서 저장',
	FUNC_SAVEAS: '새 이름으로 문서 저장',
	FUNC_PREVIEW: '문서 미리보기',
	FUNC_DELETE: '편집문서 닫기',
	FUNC_PUBLISH: 'HTML 생성',

	TOOL_SELECT: '선택',
	TOOL_BOX: '박스 그리기',
	TOOL_TEXT: '텍스트객체 그리기',
	TOOL_IMAGE: '이미지객체 그리기',
	TOOL_AUDIO: '오디오객체 그리기',
	TOOL_VIDEO: '비디오객체 그리기',

	DOCUMENT_MODE_NONE: '',
	DOCUMENT_MODE_NEW: '(신규)',
	DOCUMENT_MODE_EDIT: '(편집)',

	NEW_DOCUMENT: '새 문서',
	NEW_DOCUMENT_TITLE: '제목',
	NEW_DOCUMENT_ORIENTATION: '문서 방향',
	NEW_DOCUMENT_MUST_INPUT_TITLE: '제목을 입력해야 합니다.',
	NEW_DOCUMENT_RADIO: '해상도비율',
	NEW_DOCUMENT_RATIO_FREE: '비율무시',
	NEW_DOCUMENT_RATIO_CUSTOM: '(사용자정의)',
	NEW_DOCUMENT_NONAME: 'NONAME',

	CONTROL_MULTISELECT_OBJID: '(다수의 객체 선택)',

	WAITBAR_TIMEOUT: '서버응답 대기시간을 초과했습니다.',

	OBJECT_BOX: '박스 객체',
	OBJECT_TEXT: '텍스트 객체',
	OBJECT_VIDEO: '비디오 객체',
	OBJECT_AUDIO: '오디오 객체',
	OBJECT_IMAGE: '이미지 객체',

	IA_EVENT: 'event',
	IA_EVENT_SELECT_DOCUMENT: '(문서)',
	IA_EVENT_NO_SELECTED: '선택된 객체가 없습니다.',
	IA_EVENT_MULTI_SELECTED: '여러개의 객체가 선택되었습니다.',
	IA_EVENT_SELECTED_EVENT_NOT_FOUND: '선택된 이벤트가 없습니다.',
	IA_EVENT_COPY_COMPLETE: '이벤트가 클립보드에 복사되었습니다.',

	IA_EVENT_PREVIEW: '이벤트 미리보기',
	IA_EVENT_PREVIEW_COMPLETE: '이전으로 돌아가려면 확인버튼을 눌러주세요.',
	IA_EVENT_PREVIEW_FIREEVENT_CAN_NOT_PREVIEW: '"이벤트발생"은 미리보기가 불가능합니다.',
	IA_EVENT_PREVIEW_PLAY_CAN_NOT_PREVIEW: '"재생/정지"는 미리보기가 불가능합니다.',
	IA_EVENT_PREVIEW_SCRIPT_CAN_NOT_PREVIEW: '"스크립트"는 미리보기가 불가능합니다.',
	IA_EVENT_PREVIEW_FIREEVENT: '"%s" 객체에 "%s" 이벤트를 전달합니다.',
	IA_EVENT_PREVIEW_SCRIPT: '"%s()" 함수 호출',

	IA_EVENT_PREVIEW_CURRENT_EVENT: '현재 이벤트',
	IA_EVENT_PREVIEW_NEXT_EVENT: '다음 이벤트',
	IA_EVENT_PREVIEW_NONE_EVENT: '(없음)',
	IA_EVENT_PREVIEW_END_OF_EVENT: '이벤트가 끝났습니다.',

	IA_EVENT_LIST_EMPTY: '이벤트가 없습니다.',
	IA_EVENT_LIST_HEADER_ID: 'ID',
	IA_EVENT_LIST_HEADER_EVENT: '이벤트',
	IA_EVENT_LIST_HEADER_ACTION: '작업',
	IA_EVENT_LIST_HEADER_TARGET_OBJECT: '대상/값',

	IA_EVENT_TOOLTOP_ADD: '이벤트 추가',
	IA_EVENT_TOOLTOP_MODIFY: '이벤트 수정',
	IA_EVENT_TOOLTOP_DELETE: '이벤트 삭제',
	IA_EVENT_TOOLTOP_COPY: '클립보드로 복사',
	IA_EVENT_TOOLTOP_PASTE: '클립보드에서 붙여넣기',
	IA_EVENT_TOOLTOP_PREVIEW: '작업 미리보기',

	IA_EVENT_TYPE: '이벤트 추가',
	IA_EVENT_TYPE_EVENTTYPE: '이벤트 구분',
	IA_EVENT_TYPE_EVENTTYPE_CLICK: '클릭/터치',
	IA_EVENT_TYPE_EVENTTYPE_AFTER: '이벤트 후',
	IA_EVENT_TYPE_EVENTTYPE_CUSTOM: '사용자정의 이벤트',
	IA_EVENT_TYPE_EVENTTYPE_SCROLL: '스크롤',
	IA_EVENT_TYPE_POSITION: '위치',
	IA_EVENT_TYPE_INVALID_SCROLL_POSITION: '스크롤 위치가 올바르지 않습니다.',
	IA_EVENT_TYPE_CUSTOMEVENT: '사용자정의',
	IA_EVENT_TYPE_ACTIONTYPE: '작업 구분',
	IA_EVENT_TYPE_ACTIONTYPE_STYLE: '스타일 변경',
	IA_EVENT_TYPE_ACTIONTYPE_SCROLL: '스크롤',
	IA_EVENT_TYPE_ACTIONTYPE_LINK: '링크',
	IA_EVENT_TYPE_ACTIONTYPE_PLAY: '재생/정지',
	IA_EVENT_TYPE_ACTIONTYPE_FIREEVENT: '이벤트 발생',
	IA_EVENT_TYPE_ACTIONTYPE_SCRIPT: '스크립트',

	IA_EVENT_SELECT_TARGET_OBJ: '이벤트 대상 선택',
	IA_EVENT_SELECT_TARGET_OBJ_DESC: '이벤트 대상을 선택합니다.',

	IA_EVENT_STYLE: '스타일',
	IA_EVENT_STYLE_EXIST_STYLE: '이미 존재하는 스타일입니다.',
	IA_EVENT_STYLE_TARGETOBJ: '대상 객체',
	IA_EVENT_STYLE_TARGETOBJ_SELECT: '선택',
	IA_EVENT_STYLE_HEADER_NAME: '이름',
	IA_EVENT_STYLE_HEADER_ORG_VALUE: '이전값',
	IA_EVENT_STYLE_HEADER_ORG_UNIT: '단위',
	IA_EVENT_STYLE_HEADER_NEW_VALUE: '변경값',
	IA_EVENT_STYLE_HEADER_NEW_UNIT: '단위',

	IA_EVENT_STYLE_REPEAT: '이벤트반복',
	IA_EVENT_STYLE_REPEAT_TOGGLE: '토글',
	IA_EVENT_STYLE_REPEAT_NO_REPEAT: '한번만',
	IA_EVENT_STYLE_REPEAT_REPEAT: '반복',

	IA_EVENT_STYLE_FIRE_ENDEVENT: '종료이벤트',

	IA_EVENT_STYLE_ADD: '스타일 추가',
	IA_EVENT_STYLE_ADD_STYLE: '스타일',

	IA_EVENT_STYLE_TARGET_OBJECT_NOT_SELECTED: '대상 객체가 선택되지 않았습니다.',
	IA_EVENT_STYLE_DEFINED_STYLE_NOT_FOUND: '정의된 스타일이 없습니다.',

	IA_EVENT_STYLE_DETECT: '객체 상태 감지',
	IA_EVENT_STYLE_DETECT_ACTION: '대상 객체의 Layout/Style변화를 감지하여 적용합니다.',

	IA_EVENT_STYLE_TOOLTIP_ADD: '스타일 추가',
	IA_EVENT_STYLE_TOOLTIP_DELETE: '스타일 삭제',
	IA_EVENT_STYLE_TOOLTIP_DETECT: '스타일 감지',

	IA_EVENT_LINK: '링크',
	IA_EVENT_LINK_URL: 'URL',
	IA_EVENT_LINK_URL_IS_NOT_INPUTTED: 'URL이 입력되지 않았습니다.',
	IA_EVENT_LINK_REPEAT: '이벤트반복',
	IA_EVENT_LINK_REPEAT_NO_REPEAT: '한번만',
	IA_EVENT_LINK_REPEAT_REPEAT: '반복',

	IA_EVENT_FIREEVENT: '이벤트 발생',
	IA_EVENT_FIREEVENT_EVENT: '이벤트',
	IA_EVENT_FIREEVENT_EVENT_CUSTOM: '(사용자정의)',
	IA_EVENT_FIREEVENT_DEFINED: '정의된이벤트',
	IA_EVENT_FIREEVENT_EVENT_IS_NOT_INPUTTED: '이벤트가 입력되지 않았습니다.',
	IA_EVENT_FIREEVENT_TARGETOBJ: '대상 객체',
	IA_EVENT_FIREEVENT_TARGETOBJ_SELECT: '선택',
	IA_EVENT_FIREEVENT_TARGET_OBJECT_NOT_SELECTED: '대상 객체가 선택되지 않았습니다.',
	IA_EVENT_FIREEVENT_REPEAT: '이벤트반복',
	IA_EVENT_FIREEVENT_REPEAT_NO_REPEAT: '한번만',
	IA_EVENT_FIREEVENT_REPEAT_REPEAT: '반복',

	IA_EVENT_SCROLLTO: '스크롤',
	IA_EVENT_SCROLLTO_POSITION: '위치',
	IA_EVENT_SCROLLTO_INVALID_SCROLL_POSITION: '스크롤 위치가 올바르지 않습니다.',
	IA_EVENT_SCROLLTO_REPEAT: '이벤트반복',
	IA_EVENT_SCROLLTO_REPEAT_TOGGLE: '토글',
	IA_EVENT_SCROLLTO_REPEAT_NO_REPEAT: '한번만',
	IA_EVENT_SCROLLTO_REPEAT_REPEAT: '반복',
	IA_EVENT_SCROLLTO_FIRE_ENDEVENT: '종료이벤트',

	IA_EVENT_SCROLLTO_DETECT: '스크롤 위치 감지',
	IA_EVENT_SCROLLTO_DETECT_POSITION: '편집기가 스크롤된 위치를 감지하여 적용합니다.',

	IA_EVENT_PLAY: '재생/정지',
	IA_EVENT_PLAY_TARGETOBJ: '대상 객체',
	IA_EVENT_PLAY_TARGETOBJ_SELECT: '선택',
	IA_EVENT_PLAY_ACTION: '작업',
	IA_EVENT_PLAY_TOGGLE: '재생/정지',
	IA_EVENT_PLAY_TARGET_OBJECT_NOT_SELECTED: '대상 객체가 선택되지 않았습니다.',
	IA_EVENT_PLAY_REPEAT: '이벤트반복',
	IA_EVENT_PLAY_REPEAT_NO_REPEAT: '한번만',
	IA_EVENT_PLAY_REPEAT_REPEAT: '반복',

	IA_EVENT_SCRIPT: '스크립트',
	IA_EVENT_SCRIPT_NAME: '함수',
	IA_EVENT_SCRIPT_REPEAT: '이벤트반복',
	IA_EVENT_SCRIPT_REPEAT_NO_REPEAT: '한번만',
	IA_EVENT_SCRIPT_REPEAT_REPEAT: '반복',
	IA_EVENT_SCRIPT_SCRIPT_NOT_SELECTED: '함수가 선택되지 않았습니다.',

	IA_TRANSITION: 'transition',
	IA_TRANSITION_NO_SELECTED: '선택된 객체가 없습니다.',
	IA_TRANSITION_MULTI_SELECTED: '여러개의 객체가 선택되었습니다.',
	IA_TRANSITION_SELECTED_TRANSITION_NOT_FOUND: '선택된 효과가 없습니다.',
	IA_TRANSITION_COPY_COMPLETE: '효과가 클립보드에 복사되었습니다.',

	IA_TRANSITION_LIST_EMPTY: '효과가 없습니다.',
	IA_TRANSITION_LIST_HEADER_PROPERTY: '대상',
	IA_TRANSITION_LIST_HEADER_DURATION: '지속시간',
	IA_TRANSITION_LIST_HEADER_TIMING: '타이밍 함수',

	IA_TRANSITION_TOOLTOP_ADD: '효과 추가',
	IA_TRANSITION_TOOLTOP_MODIFY: '효과 수정',
	IA_TRANSITION_TOOLTOP_DELETE: '효과 삭제',
	IA_TRANSITION_TOOLTOP_COPY: '클립보드로 복사',
	IA_TRANSITION_TOOLTOP_PASTE: '클립보드에서 붙여넣기',
	IA_TRANSITION_TOOLTOP_PREVIEW: '미리보기',

	IA_TRANSTIION_ADD: '효과',
	IA_TRANSITION_ADD_PROPERTY: '대상',
	IA_TRANSITION_ADD_DURATION: '지속시간(s)',
	IA_TRANSITION_ADD_TIMING: '타이밍함수',
	IA_TRANSITION_ADD_INVALID_DURATION: '지속시간이 올바르지 않습니다.',

	IA_TRANSTIION_PREVIEW: '미리보기',
	IA_TRANSITION_PREVIEW_CSS: 'CSS',

	IA_IMAGE: 'image',
	IA_IMAGE_NO_SELECTED: '선택된 객체가 없습니다.',
	IA_IMAGE_MULTI_SELECTED: '여러개의 객체가 선택되었습니다.',
	IA_IMAGE_SELECTED_IMAGE_NOT_FOUND: '선택된 이미지가 없습니다.',
	IA_IMAGE_INVALID_OBJECT_TYPE: '(이미지 객체가 아님)',

	IA_IMAGE_TOOLTOP_ADD: '추가(링크)',
	IA_IMAGE_TOOLTOP_MODIFY: '정보수정',
	IA_IMAGE_TOOLTOP_DELETE: '삭제',

	IA_IMAGE_LIST_EMPTY: '이미지가 없습니다.',
	IA_IMAGE_LIST_HEADER_NAME: '이름',
	IA_IMAGE_LIST_HEADER_TYPE: '위치',
	IA_IMAGE_LIST_HEADER_FILLTYPE: '맞춤',

	IA_IMAGE_FILLTYPE_AUTOFIT_INNER: '자동맞춤(안)',
	IA_IMAGE_FILLTYPE_AUTOFIT_OUTER: '자동맞춤(밖)',
	IA_IMAGE_FILLTYPE_FILL: '채움',

	IA_IMAGE_ACTIONTYPE: '전환효과',
	IA_IMAGE_ACTIONTYPE_EVENT_SCROLL: '이벤트에 의한 스크롤',
	IA_IMAGE_ACTIONTYPE_EVENT_CHANGE: '이벤트에 의한 전환',
	IA_IMAGE_ACTIONTYPE_CLICK_SCROLL: '클릭에 의한 스크롤',
	IA_IMAGE_ACTIONTYPE_CLICK_CHANGE: '클릭에 의한 전환',
	IA_IMAGE_ACTIONTYPE_SWIPE_SCROLL: '드래그에 의한 스크롤',

	IA_IMAGE_LOCATION_SERVER: '서버',
	IA_IMAGE_LOCATION_LINK: '링크',

	IA_IMAGE_PROPERTY_ADD: '이미지 추가(링크)',
	IA_IMAGE_PROPERTY_MODIFY: '이미지 정보 수정',

	IA_IMAGE_PROPERTY_NAME: '이름',
	IA_IMAGE_PROPERTY_TYPE: '위치',
	IA_IMAGE_PROPERTY_FILLTYPE: '맞춤',
	IA_IMAGE_PROPERTY_NAME_IS_NOT_INPUTTED: '이름이 입력되지 않았습니다.',

	IA_AUDIO: 'audio',
	IA_AUDIO_SELECTED_AUDIO_NOT_FOUND: '선택된 오디오 소스가 없습니다.',
	IA_AUDIO_INVALID_OBJECT_TYPE: '(오디오 객체가 아님)',

	IA_AUDIO_TOOLTOP_MODIFY: '정보수정',
	IA_AUDIO_TOOLTOP_DELETE: '삭제',
	IA_AUDIO_TOOLTOP_AUTOPLAY: '자동재생',
	IA_AUDIO_TOOLTOP_CONTROL: '컨트롤보이기',
	IA_AUDIO_TOOLTOP_LOOP: '반복',

	IA_AUDIO_LIST_EMPTY: '오디오 소스가 없습니다.',
	IA_AUDIO_LIST_HEADER_NAME: '이름',
	IA_AUDIO_LIST_HEADER_MIME: 'MIME구분',

	IA_AUDIO_PROPERTY_MODIFY: '오디오 소스 정보 수정',
	IA_AUDIO_PROPERTY_NAME: '이름',
	IA_AUDIO_PROPERTY_MIME: 'MIME구분',

	IA_VIDEO: 'video',
	IA_VIDEO_SITE: '사이트',
	IA_VIDEO_WIDTH: '너비',
	IA_VIDEO_HEIGHT: '높이',
	IA_VIDEO_KEY: '고유번호',
	IA_VIDEO_INVALID_OBJECT_TYPE: '(비디오 객체가 아님)',

	IA_VIDEO_TOOLTOP_INPUT_TAG: '비디오 태그 입력',

	IA_VIDEO_INPUT: '비디오 태그 입력',
	IA_VIDEO_INPUT_SITE: '사이트',
	IA_VIDEO_INPUT_TAG: '태그',
	IA_VIDEO_INPUT_TAG_IS_NOT_INPUTTED: 'URL이 입력되지 않았습니다.',
	IA_VIDEO_INPUT_INVALID_VALUE: '잘못된 태그를 입력하였습니다.',
	IA_VIDEO_INPUT_HELP: '비디오가 업로드된 공유사이트를 선택하고,<br>해당 사이트에서 제공하는 &lt;IFRAME&gt; 태그를 입력합니다.',

	IA_DOCUMENT: 'document',
	IA_DOCUMENT_BACKGROUND_IMAGE: '배경이미지',
	IA_DOCUMENT_BACKGROUND_REPEAT: '배경반복',
	IA_DOCUMENT_BACKGROUND_SIZE: '배경크기',
	IA_DOCUMENT_BACKGROUND_ATTACH: '배경고정',
	IA_DOCUMENT_BACKGROUND_COLOR: '배경색상',
	IA_DOCUMENT_EDITOR_STATUS: '편집상태',
	IA_DOCUMENT_NAME: '문서제목',
	IA_DOCUMENT_RATIO: '해상도비율',

	IA_SCRIPT: 'script',
	IA_SCRIPT_TOOLTOP_ADD_SOURCE: '스크립트 소스추가',
	IA_SCRIPT_TOOLTOP_ADD_LINK: '외부스크립트 추가',
	IA_SCRIPT_TOOLTOP_MODIFY: '스크립트 수정',
	IA_SCRIPT_TOOLTOP_DELETE: '스크립트 삭제',
	IA_SCRIPT_LIST_HEADER_FUNCTION: '함수명',
	IA_SCRIPT_LIST_HEADER_NAME: '스크립트명',
	IA_SCRIPT_SELECTED_SCRIPT_NOT_FOUND: '선택된 스크립트가 없습니다.',
	IA_SCRIPT_EDITOR: '스크립트 편집',
	IA_SCRIPT_EDITOR_NAME: '함수',
	IA_SCRIPT_EDITOR_NAME_IS_NOT_INPUTTED: '함수명이 입력되지 않았습니다.',
	IA_SCRIPT_EDITOR_SOURCE_IS_NOT_INPUTTED: '소스코드가 입력되지 않았습니다.',
	IA_SCRIPT_EDITOR_HELP: 'JQuery 2.1.3을 사용할 수 있습니다.<br>각 객체의 실제ID는 편집기상의 ID와 동일하고, 모두 &lt;DIV&gt;로 되어 있습니다.<br>함수가 호출될때, 이벤트를 발생시킨 객체를 obj 인자로 넘겨줍니다.',
	IA_SCRIPT_LINK: '외부 스크립트',
	IA_SCRIPT_LINK_URL: 'URL',
	IA_SCRIPT_LINK_URL_IS_NOT_INPUTTED: 'URL이 입력되지 않았습니다.',

	IA_ANIMATION: 'animation define',
	IA_ANIMATION_LIST_HEADER_NAME: '이름',
	IA_ANIMATION_TOOLTOP_ADD: '애니메이션 정의 추가',
	IA_ANIMATION_TOOLTOP_MODIFY: '애니메이션 정의 수정',
	IA_ANIMATION_TOOLTOP_DELETE: '애니메이션 정의 삭제',
	IA_ANIMATION_TOOLTOP_PREVIEW: '애니메이션 정의 미리보기',
	IA_ANIMATION_SELECTED_ANIMATION_NOT_FOUND: '선택된 애니메이션 정의가 없습니다.',

	IA_ANIMATION_SELECT_TARGET_OBJ: '애니메이션 정의 대상 선택',
	IA_ANIMATION_SELECT_TARGET_OBJ_DESC: '애니메이션 정의 대상을 선택합니다.',

	IA_ANIMATION_EDITOR: '애니메이션 편집',
	IA_ANIMATION_EDITOR_NAME: '이름',
	IA_ANIMATION_EDITOR_TARGETOBJ: '대상 객체',
	IA_ANIMATION_EDITOR_TARGETOBJ_SELECT: '선택',
	IA_ANIMATION_EDITOR_HEADER_KEYFRAME: '키프레임',
	IA_ANIMATION_EDITOR_HEADER_VALUES: '변경값',
	IA_ANIMATION_EDITOR_NAME_IS_NOT_INPUTTED: '이름이 입력되지 않았습니다.',
	IA_ANIMATION_EDITOR_DEFINED_KEYFRAME_NOT_FOUND: '정의된 키프레임이 없습니다.',
	IA_ANIMATION_EDITOR_EXIST_KEYFRAME: '동일한 키프레임이 존재합니다.',
	IA_ANIMATION_EDITOR_SELECTED_KEYFRAME_NOT_FOUND: '선택된 키프레임이 없습니다.',
	IA_ANIMATION_EDITOR_TARGET_OBJECT_NOT_SELECTED: '대상 객체가 선택되지 않았습니다.',

	IA_ANIMATION_EDITOR_TOOLTIP_ADD: '키프레임 추가',
	IA_ANIMATION_EDITOR_TOOLTIP_MODIFY: '키프레임 수정',
	IA_ANIMATION_EDITOR_TOOLTIP_DELETE: '키프레임 삭제',
	IA_ANIMATION_EDITOR_TOOLTIP_DETECT: '키프레임 스타일 감지',

	IA_ANIMATION_STYLE: '애니메이션 키프레임 스타일',
	IA_ANIMATION_STYLE_KEYFRAME: '키프레임',
	IA_ANIMATION_STYLE_HEADER_NAME: '이름',
	IA_ANIMATION_STYLE_HEADER_ORG_VALUE: '이전값',
	IA_ANIMATION_STYLE_HEADER_ORG_UNIT: '단위',
	IA_ANIMATION_STYLE_HEADER_NEW_VALUE: '변경값',
	IA_ANIMATION_STYLE_HEADER_NEW_UNIT: '단위',

	IA_ANIMATION_STYLE_ADD: '스타일 추가',
	IA_ANIMATION_STYLE_ADD_STYLE: '스타일',

	IA_ANIMATION_STYLE_EXIST_STYLE: '이미 존재하는 스타일입니다.',
	IA_ANIMATION_STYLE_DEFINED_STYLE_NOT_FOUND: '정의된 스타일이 없습니다.',
	IA_ANIMATION_STYLE_KEYFRAME_IS_NOT_INPUTTED: '키프레임이 입력되지 않았습니다.',
	IA_ANIMATION_STYLE_TARGET_OBJECT_NOT_SELECTED: '대상 객체가 선택되지 않았습니다.',

	IA_ANIMATION_STYLE_DETECT: '객체 상태 감지',
	IA_ANIMATION_STYLE_DETECT_ACTION: '대상 객체의 Layout/Style변화를 감지하여 적용합니다.',

	IA_ANIMATION_STYLE_TOOLTIP_ADD: '스타일 추가',
	IA_ANIMATION_STYLE_TOOLTIP_DELETE: '스타일 삭제',
	IA_ANIMATION_STYLE_TOOLTIP_DETECT: '스타일 감지',

	IA_ANIMATION_PREVIEW: '애니메이션 미리보기',
	IA_ANIMATION_PREVIEW_TARGETOBJ: '대상 객체',
	IA_ANIMATION_PREVIEW_TARGETOBJ_SELECT: '선택',
	IA_ANIMATION_PREVIEW_NAME: '이름',
	IA_ANIMATION_PREVIEW_DURATION: '지속시간(s)',
	IA_ANIMATION_PREVIEW_TIMING_FUNCTION: '타이밍함수',
	IA_ANIMATION_PREVIEW_DIRECTION: '방향',
	IA_ANIMATION_PREVIEW_TARGET_OBJECT_NOT_SELECTED: '대상 객체가 선택되지 않았습니다.',

	IA_DOMTREE: 'dom tree',


	FILE_BROWSER: '파일 찾아보기',
	FILE_BROWSER_PATH: '경로',
	FILE_BROWSER_LIST_NAME: '파일명',
	FILE_BROWSER_LIST_DATE: '등록일',
	FILE_BROWSER_LIST_SIZE: '크기',
	FILE_BROWSER_LIST_IS_NOT_SELECTED: '항목이 선택되지 않았습니다.',

	OPEN_DOCUMENT: '열기',
	OPEN_DOCUMENT_LIST_NAME: '이름',
	OPEN_DOCUMENT_LIST_DATE: '등록일',
	OPEN_DOCUMENT_LIST_SCROLL: '스크롤',
	OPEN_DOCUMENT_LIST_SCROLL_LANDSCAPE: '가로',
	OPEN_DOCUMENT_LIST_SCROLL_PORTRAIT: '세로',
	OPEN_DOCUMENT_LIST_IS_NOT_SELECTED: '항목이 선택되지 않았습니다.',

	SAVE_DOCUMENT: '새 이름으로 저장',
	SAVE_DOCUMENT_ID: 'ID',
	SAVE_DOCUMENT_NAME: '제목',
	SAVE_DOCUMENT_SCROLL: '스크롤',
	SAVE_DOCUMENT_SCROLL_LANDSCAPE: '가로',
	SAVE_DOCUMENT_SCROLL_PORTRAIT: '세로',
	SAVE_DOCUMENT_ID_IS_NOT_INPUTTED: 'ID가 입력되지 않았습니다.',
	SAVE_DOCUMENT_NAME_IS_NOT_INPUTTED: '제목이 입력되지 않았습니다.',

	CONTEXTMENU_OBJECT_REMOVE: '객체 삭제',
	CONTEXTMENU_UNLOCK_RESIZE: '크기변경 잠금해제',
	CONTEXTMENU_LOCK_RESIZE: '크기변경 잠금',
	CONTEXTMENU_UNLOCK_MOVE: '이동 잠금해제',
	CONTEXTMENU_LOCK_MOVE: '이동 잠금',

	MOBILE_UPLOAD: '파일 업로드',
	MOBILE_UPLOAD_SELECT_FILE: '파일 선택',
	MOBILE_UPLOAD_CAPTURE_CAMERA: '카메라 촬영'

};