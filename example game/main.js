
tex = Graphics.getTexture("icon.png");

init = function() {
	Graphics.setMouseHidden(true);
}

render = function(batch, mBatch) {
	batch.draw(tex, Input.getInputXY().x, Input.getInputXY().y);
	player.render(batch);
}

update = function(delta,camera) {
	player.update(delta);
}

Player = function(x,y) {
	this.x = x;
	this.y = y;
	this.velY = 0;
	this.velX = 1;
	this.width = 16;
	this.height = 16;
	this.update = function(delta) {
		this.velY -= 0.1;
		this.y += this.velY;
		this.x += this.velX;
	}
	this.render = function(batch) {
		batch.draw(tex, this.x, this.y, this.width, this.height);
	}
}

player = new Player(100,500);





