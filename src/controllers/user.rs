#![allow(clippy::missing_errors_doc)]
#![allow(clippy::unnecessary_struct_initialization)]
#![allow(clippy::unused_async)]
use crate::{
    models::{articles, users::{users, Model}},
    views::user::UserResponse,
};
use axum::debug_handler;
use loco_rs::prelude::*;

async fn load_item(ctx: &AppContext, id: i32) -> Result<Model> {
    let user = users::Entity::find_by_id(id).one(&ctx.db).await?;
    user.ok_or_else(|| Error::NotFound)
}

#[debug_handler]
pub async fn index(State(_ctx): State<AppContext>) -> Result<Response> {
    format::empty()
}

pub async fn get_one(Path(id): Path<i32>, State(ctx): State<AppContext>) -> Result<Response> {
    let user = load_item(&ctx, id).await?;
    format::json(UserResponse::new(&user))
}

pub async fn get_articles(Path(id): Path<i32>, State(ctx): State<AppContext>) -> Result<Response> {
    let articles = articles::Model::find_by_user_id(&ctx.db, id).await?;
    format::json(&articles)
}

pub fn routes() -> Routes {
    Routes::new()
        .prefix("api/users/")
        .add("/", get(index))
        .add("{id}", get(get_one))
        .add("/{id}/articles", get(get_articles))
}
