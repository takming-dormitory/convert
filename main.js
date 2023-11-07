document.querySelector("#btn").addEventListener("click", () => {
    const input = document.querySelector("#input").value
    const output = document.querySelector("#output")
    const result = convertString(input)
    output.value = result
    output.select()
    document.execCommand("copy")
    alert("已複製到剪貼簿")
    // 清空輸入框
    document.querySelector("#input").value = ""
})

// https://drive.google.com/file/d/1x05ic0MFKooC4AhwC2B0tQ0fu1oBz3KF/view?usp=drive_link or https://drive.google.com/file/d/1x05ic0MFKooC4AhwC2B0tQ0fu1oBz3KF/view?usp=sharing

// 轉換字串
const convertString = (str) => {
    let result
    let strarr = str.split("\n")
    console.log(strarr)
    for (let i = 0; i < strarr.length; i++) {
        // strarr[i] = strarr[i].replace(
        //     /https:\/\/drive.google.com\/file\/d\/(.*)\/view\?usp=sharing/g,
        //     "https://drive.google.com/uc?export=view&id=$1"
        // )
        // ?usp=drive_link or ?usp=sharing 都要替換
        strarr[i] = strarr[i].replace(
            /https:\/\/drive.google.com\/file\/d\/(.*)\/view\?usp=(.*)/g,
            "https://drive.google.com/uc?export=view&id=$1"
        )
        result = strarr.join("\n")
    }
    return result
}
