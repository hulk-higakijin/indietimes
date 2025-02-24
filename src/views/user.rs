use serde::{Deserialize, Serialize};

#[derive(Debug, Deserialize, Serialize)]
pub struct UserResponse {
    pub id: i32,
    pub name: String,
    pub created_at: chrono::DateTime<chrono::FixedOffset>,
    pub updated_at: chrono::DateTime<chrono::FixedOffset>,
}

impl UserResponse {
    #[must_use]
    pub fn new(user: &crate::models::users::Model) -> Self {
        Self {
            id: user.id,
            name: user.name.clone(),
            created_at: user.created_at,
            updated_at: user.updated_at,
        }
    }
}
