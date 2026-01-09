mod file_down;

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
async fn down_img(url: &str) -> Result<String, String> {
    // 调用异步的 down_file 并等待执行完成
    match file_down::down_file(String::from(url)).await {
        // 2. 成功返回友好提示（Tauri 可序列化）
        Ok(_) => Ok(format!("文件下载成功！URL: {}", url)),
        // 3. 错误转换为字符串（解决 Box<dyn Error> 无法序列化的问题）
        Err(_) => Err(format!("下载失败")),
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_http::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, down_img])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
