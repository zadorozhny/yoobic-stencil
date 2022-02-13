import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'kit-grid',
  styleUrl: 'grid.css',
  shadow: true,
})
export class Grid {
  @Prop() width: number;
  @Prop() item: boolean;
  @Prop() container: boolean;
  @Prop() spacing: number;

  get type() {
    if (this.item) {
      return 'item';
    }
    if (this.container) {
      return 'container'; 
    }
  }

  render() {
    return (
      <Host
        style={{ 'flex-basis': `${this.width}%` }}
      >
        <div
          class={`grid grid-${this.type}`}
          style={{ 'gap': `${this.spacing}%` }}
        >
          <slot />
        </div>
      </Host>
    );
  }
}
