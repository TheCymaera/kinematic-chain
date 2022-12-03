import { Vector2 } from "open-utilities/geometry";

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
			this.moveTipTo(tip.add(position.clone().subtract(tip).normalize().multiply(maxAmount)));
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
			// rotate span
			const difference = position.clone().subtract(this.base);
			this.span.copy(difference.normalize().multiply(this.span.length()));
			// move segment
			this.base.copy(position).subtract(this.span);
		}
	
		tipPosition() {
			return this.base.clone().add(this.span);
		}
	}
}