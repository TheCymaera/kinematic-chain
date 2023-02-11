import { Vector2 } from "open-utilities/core/maths/mod.js";

export class KinematicChain {
	segments: KinematicChain.Segment[] = [];

	tipPosition(): Vector2 {
		return this.segments[this.segments.length-1]!.tipPosition();
	}

	moveTipTo(position: Vector2) {
		for (let i = this.segments.length - 1; i >= 0; i--) {
			const segment = this.segments[i]!;
			segment.moveTipTo(position);
			position = segment.base;
		}
	}

	moveTipTowards(position: Vector2, maxAmount: number) {
		const tip = this.tipPosition();
		const distance = tip.distanceTo(position);
		if (distance < maxAmount) {
			this.moveTipTo(position);
		} else {
			const direction = position.clone().subtract(tip).normalize();
			if (direction) this.moveTipTo(tip.clone().add(direction.multiply(maxAmount)));
		}
	}

	anchorAt(position: Vector2) {
		const displacement = this.segments[0]!.base.clone().subtract(position);
		for (const segment of this.segments) segment.base.subtract(displacement);
	}
}

export namespace KinematicChain {
	export class Segment {
		constructor(
			public base: Vector2,
			public span: Vector2,
			public renderThickness: number,
		) {}
	
		moveTipTo(position: Vector2) {
			const direction = position.clone().subtract(this.base).normalize();
			if (!direction) return;

			// rotate span
			this.span.copy(direction.multiply(this.span.length()));
			// move segment
			this.base.copy(position).subtract(this.span);
		}
	
		tipPosition() {
			return this.base.clone().add(this.span);
		}
	}
}