use super::_entities::articles;
pub use super::_entities::articles::{ActiveModel, Entity, Model};
use sea_orm::{entity::prelude::*, QueryOrder};
pub type Articles = Entity;

#[async_trait::async_trait]
impl ActiveModelBehavior for ActiveModel {
    async fn before_save<C>(self, _db: &C, insert: bool) -> std::result::Result<Self, DbErr>
    where
        C: ConnectionTrait,
    {
        if !insert && self.updated_at.is_unchanged() {
            let mut this = self;
            this.updated_at = sea_orm::ActiveValue::Set(chrono::Utc::now().into());
            Ok(this)
        } else {
            Ok(self)
        }
    }
}

// implement your read-oriented logic here
impl Model {
    /// orders articles by the most recent first
    ///
    /// # Errors
    ///
    /// When there is a database query error or no articles are found
    pub async fn order_by_recent(db: &DatabaseConnection) -> Result<Vec<Self>, DbErr> {
        articles::Entity::find()
            .order_by_desc(articles::Column::CreatedAt)
            .all(db)
            .await
    }

    pub async fn find_by_user_id(db: &DatabaseConnection, user_id: i32) -> Result<Vec<Self>, DbErr> {
        articles::Entity::find().filter(articles::Column::UserId.eq(user_id)).all(db).await
    }
}

// implement your write-oriented logic here
impl ActiveModel {}

// implement your custom finders, selectors oriented logic here
impl Entity {}
