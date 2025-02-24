use serde::{Deserialize, Serialize};

#[derive(Debug, Deserialize, Serialize)]
pub struct ArticleResponse {
    pub id: i32,
    pub title: String,
    pub content: String,
    pub summary: String,
    pub author_name: String,
    pub author_image: String,
    pub user_id: i32,
    pub created_at: chrono::DateTime<chrono::FixedOffset>,
    pub updated_at: chrono::DateTime<chrono::FixedOffset>,
}

impl ArticleResponse {
    #[must_use]
    pub fn new(article: &crate::models::articles::Model) -> Self {
        let author_name = String::from("higakijin");
        let author_image = String::from("https://example.com/hello.png");

        Self {
            id: article.id,
            title: article.title.clone(),
            content: article.content.clone(),
            summary: article.summary.clone(),
            author_name,
            author_image,
            user_id: article.user_id,
            created_at: article.created_at,
            updated_at: article.updated_at,
        }
    }
}
