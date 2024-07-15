const aiAlermTime   = document.getElementById('ai_alerm_time')
const aiAlermName   = document.getElementById('ai_alerm_name')
const aiAlermPath   = document.getElementById('ai_alerm_path')
const aiAlermPrompt = document.getElementById('ai_alerm_prompt')
const aiAlermVoice  = document.getElementById('ai_alerm_voice')
const aiAlermChat   = document.getElementById('ai_alerm_chat')

const addButton =  document.getElementById('add_ai_alerm')

addButton.addEventListener('click',() => {
    const aiAlermInputs = {
        time: aiAlermTime.value,
        name: aiAlermName.value,
        path: aiAlermPath.value,
        prompt: aiAlermPrompt.value,
        voice: aiAlermVoice.value,
        chat: aiAlermChat.value
    }
    window.alermSettingInputs.aiInputs(aiAlermInputs)

    // if (true) {// すべてのフォームが埋まっている場合
    //     // ウィンドウを閉じる
    // }

    document.getElementById('ai_alerm_time').value = ''
    document.getElementById('ai_alerm_name').value = ''
    document.getElementById('ai_alerm_path').value = ''
    document.getElementById('ai_alerm_prompt').value = ''
    document.getElementById('ai_alerm_voice').value = ''
    document.getElementById('ai_alerm_chat').value = ''
})

