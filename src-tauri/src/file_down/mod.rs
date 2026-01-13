use std::{
    env,
    fs::{self},
    io::{self, Write},
    path::PathBuf,
};

use reqwest::{self, Response};

pub(crate) struct FileInfo {
    pub(crate) name: String,
    pub(crate) suffix: String,
}

fn extract_resize_param(url: &str) -> Option<&str> {
    // 2. 按 / 分割成路径片段，收集到 Vec 中
    let parts: Vec<&str> = url.split('/').collect();
    // 3. 取最后一个路径片段（目标参数）
    parts.last().copied()
}

// 修正核心问题的极简版
async fn create_file(
    fileinfo: &FileInfo,
    mut res: Response,
) -> Result<PathBuf, Box<dyn std::error::Error>> {
    let mut path_home =
        env::home_dir().ok_or_else(|| io::Error::new(io::ErrorKind::NotFound, "无法获取主目录"))?;
    // 先拼接目录路径，创建目录
    path_home.push("Pictures");
    path_home.push("BZH");
    fs::create_dir_all(&path_home)?;
    // 再拼接文件名
    path_home.push(format!("{}.{}", fileinfo.name, fileinfo.suffix));
    // 核心：创建文件（实现函数本意）
    let mut f = fs::File::create(&path_home)?; // 或 fs::File::create
    while let Some(buf) = res.chunk().await? {
        f.write_all(&buf).expect("文件写入");
    }
    println!("文件下载完成，保存路径：{}", &path_home.display());
    Ok(path_home)
}

pub async fn down_file(url: String) -> Result<PathBuf, Box<dyn std::error::Error>> {
    let file_name = extract_resize_param(url.as_str()).expect("文件名获取失败");

    let client = reqwest::Client::new();
    let res = client.get(&url).send().await?;
    Ok(create_file(
        &FileInfo {
            name: String::from(file_name),
            suffix: String::from("jpg"),
        },
        res,
    )
    .await?)
}
