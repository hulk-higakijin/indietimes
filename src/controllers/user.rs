#![allow(clippy::missing_errors_doc)]
#![allow(clippy::unnecessary_struct_initialization)]
#![allow(clippy::unused_async)]
use loco_rs::prelude::*;
use axum::debug_handler;
use crate::models::users::{Model, users};

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
    format::json(user)
}

pub fn routes() -> Routes {
    Routes::new()
        .prefix("api/users/")
        .add("/", get(index))
        .add("{id}", get(get_one))
}
