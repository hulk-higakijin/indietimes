use serde::{Deserialize, Serialize};

#[derive(Debug, Deserialize, Serialize)]
pub struct ArticleResponse {
    pub id: i32,
    pub title: String,
    pub content: String,
    pub summary: String,
    pub created_at: chrono::DateTime<chrono::FixedOffset>,
    pub updated_at: chrono::DateTime<chrono::FixedOffset>,
}

impl ArticleResponse {
    #[must_use]
    pub fn new(article: &crate::models::articles::Model) -> Self {
        Self {
            id: article.id,
            title: article.title.clone(),
            content: article.content.clone(),
            summary: article.summary.clone(),
            created_at: article.created_at,
            updated_at: article.updated_at,
        }
    }
}
